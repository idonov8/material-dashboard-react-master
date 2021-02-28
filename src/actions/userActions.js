const BASE_URL = "http://localhost:4000";

// Action Creators

const setUser = payload => ({ type: "SET_USER", payload });

const setLogOut = () => ({ type: "LOG_OUT" });

// Methods
export const logUserOut = () => dispatch => {
  fetch(`${BASE_URL}/logout`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      refreshToken: localStorage.getItem("refreshToken")
    })
  })
    .then(() => dispatch(setLogOut))
    .catch(err => console.error(err));
};

export const fetchUser = userInfo => dispatch => {
  console.log("Called fetchUser with ", userInfo);
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      dispatch(setUser(data.user));
    })
    .catch(err => console.error(err));
};

export const signUserUp = userInfo => dispatch => {
  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => res.json())
    .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => dispatch => {
  fetch(`${BASE_URL}/auto_login`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      dispatch(setUser(data.user));
    })
    .catch(() => {
      dispatch(refreshToken());
    });
};

const refreshToken = () => dispatch => {
  fetch(`${BASE_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      refreshToken: localStorage.getItem("refreshToken")
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        dispatch(autoLogin());
      }
    });
};
