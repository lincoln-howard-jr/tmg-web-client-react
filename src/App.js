import React, { useState } from "react";
import { withRouter, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import useAuth from "./hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let { meErr, me, login, signup, getMe } = useAuth();
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {
        !me._id &&
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
