import React, { useState } from "react";
import { withRouter, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";
import LoginModal from "./components/modals/Login";
import SignupModal from "./components/modals/Signup";
import useAuth from "./hooks/useAuth";

function App() {
  let { meErr, me, login, signup, getMe } = useAuth();
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {
        !me &&
        <>
          <Route path="/login" component={(props) => (
            <>
              <Home {...props} />
              <LoginModal {...props} />
            </>
          )}/>
          <Route path="/signup" component={(props) => (
            <>
              <Home {...props} />
              <SignupModal {...props} />
            </>
          )}/>
        </>
      }
    </Switch>
  );
}
export default withRouter(App);
