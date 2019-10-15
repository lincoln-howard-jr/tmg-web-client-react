import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';
import useAuth from './hooks/authHook';

export default function App() {
  let {ret, login, signup, getMe} = useAuth ();
  let [meErr, me] = ret;
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
