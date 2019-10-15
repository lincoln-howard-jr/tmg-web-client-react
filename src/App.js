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
  login ({username: 'lincoln.howard', password: 'password'});
  return (
    <Router>
      <>
        <Header useHistory={useHistory} me={me} />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}