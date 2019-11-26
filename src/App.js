import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Switch, Route } from "react-router-dom";
import Cause from './components/causes/Cause'
import Election from './components/election/Election'
import FileDialog from './components/modals/FileDialog';
import Home from "./components/home/Home";
import Login from "./components/modals/Login";
import Profile from './components/profile/Profile'
import Signup from "./components/modals/Signup";
import {useApp} from './AppProvider';

function App() {
  let { meErr, me, login, signup, getMe } = useApp ().useAuth;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile/:id" render={(props) => (
        <Profile {...props} />
      )}/>
      {
        !me._id &&
        <>
          <Route path="/login" render={(props) => (
            <>
              <Home {...props} me={me} />
              <Login {...props} />
            </>
          )}/>
          <Route path="/signup" render={(props) => (
            <>
              <Home {...props} me={me} />
              <Signup {...props} />
            </>
          )}/>
          <Route path="/files" render={(props) => (
            <>
              <Home {...props} me={me} />
              <FileDialog {...props} />
            </>
          )}/>
           <Route path="/causes/:id" render={(props) => (
              <Cause {...props} />
   
          )}/>
            <Route path="/election" render={(props) => (
              <Election {...props} />
   
          )}/>
        </>
        
      }
    </Switch>
  );
}
export default withRouter(App);
