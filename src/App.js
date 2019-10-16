import React, { useState } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import LoginModal from "./components/modals/Login";
import SignupModal from "./components/modals/Signup";
import useAuth from "./hooks/authHook";

function App() {
  let { ret, login, signup, getMe } = useAuth();
  let [meErr, me] = ret;
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={(props) => (
        <>
          <Home {...props} />
          <LoginModal {...props} />
        </>
      )}></Route>
      <Route path="/signup" component={(props) => (
        <>
          <Home {...props} />
          <SignupModal {...props} />
        </>
      )}></Route>
    </Switch>
  );
}
export default withRouter(App);
