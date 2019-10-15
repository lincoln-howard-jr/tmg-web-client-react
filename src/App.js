import React, {useState} from 'react';
import {
  withRouter,
  Switch,
  Route,
  Link, useHistory} from "react-router-dom";
import Home from './components/home/Home';
import LoginModal from './components/modals/LogInModal'
import SignupModal from './components/modals/Signup'
import Header from './components/header/Header';
import useAuth from './hooks/authHook';

 function App() {
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
              <SignupModal {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  )
}
export default withRouter(App);
