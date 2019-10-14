import React, { useState } from "react";
import Signup from "./components/modals/Signup.js";
import LoginModal from "./components/modals/LoginModal.js";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Switch, Route, withRouter } from "react-router-dom";

function App() {
  let [me, setMe] = useState({});
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Header />
              <Home />
            </div>
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <LoginModal {...props} me={me} />
          )}
        />

        <Route
          exact
          path="/signup"
          render={props => (
            <div>
              <Signup {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  )
}
export default withRouter(App);
