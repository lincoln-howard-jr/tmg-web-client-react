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

export default function App() {
  let [me, setMe] = useState ({});
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