import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { autoLogin } from "./actions/userActions";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import LoginPage from "views/Login/Login.js";
import SignUpPage from "views/SignUp/SignUp.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

export default function App() {
  const userReducer = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <>
      <Router history={hist}>
        <Switch>
          {userReducer.loggedIn ? (
            // Logged In
            <>
              <Route path="/admin" component={Admin} />
              <Route path="/rtl" component={RTL} />
              <Redirect from="/" to="/admin/dashboard" />
            </>
          ) : (
            // Not logged in
            <>
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LoginPage} />
              <Redirect from="/" to="/login" />
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}
