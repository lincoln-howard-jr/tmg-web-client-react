import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Switch, Route,  } from "react-router-dom";
import Home from "./components/home/Home";
import useAuth from "./hooks/useAuth"
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import FileDialog from './components/modals/FileDialog';
;

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
              <Home {...props} me={me} />
              <LoginModal {...props} />
            </>
          )}/>
          <Route path="/signup" component={(props) => (
            <>
              <Home {...props} me={me} />
              <SignupModal {...props} />
            </>
          )}/>
          <Route path="/files" component={(props) => (
            <>
              <Home {...props} me={me} />
              <FileDialog {...props} />
            </>
          )}/>
        </>
      }
    </Switch>
  );
}
export default withRouter(App);
