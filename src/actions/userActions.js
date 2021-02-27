// Action Creators

const setUser = payload => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

// Methods

export const fetchUser = userInfo => dispatch => {
  console.log("Called fetchUser with ", userInfo);
  fetch(`http://localhost:4000/login`, {
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
      console.log("data: ", data);
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.accessToken);
      dispatch(setUser(data.user));
    })
    .catch(err => console.error(err));
};

export const signUserUp = userInfo => dispatch => {
  fetch(`http://localhost:4000/users`, {
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
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => dispatch => {
  fetch(`http://localhost:4000/auto_login`, {
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
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};
