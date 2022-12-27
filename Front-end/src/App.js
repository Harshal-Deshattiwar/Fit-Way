import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

import SignUp from "./newFront/signup/SignUp";
import Login from "./newFront/login/SignIn";

import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Profile from "./newFront/Profile/Profile";

import Dashboard from "./newFront/Dashboard/Dashboard";
import { useEffect, useState } from "react";

import { history } from "./helpers/history";

import Home from "./newFront/home/Home.js";

function App() {
  const [isUser, setIsUser] = useState("");
  const [isUserRole, setIsUserRole] = useState("");

  useEffect(() => {
    setIsUser(localStorage.getItem("name"));
    setIsUserRole(localStorage.getItem("role"));
  }, []);

  return (
    <Router history={history}>
      <div></div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/resetpassword" component={ResetPassword}></Route>
        <Route
          exact
          path="/home"
          component={() => <Home authorized={isUser} />}
        />
        <div className="dashboard">
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
