import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Switch, Route } from "react-router-dom";
import FileDialog from './components/modals/FileDialog';
import Home from "./components/home/Home";
import LoginModal from "./components/modals/LoginModal";
import Profile from './components/profile/Profile'
import SignupModal from "./components/modals/SignupModal";
import useAuth from './hooks//useAuth'
;

function App() {
  let { meErr, me, login, signup, getMe } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {
        !me._id &&
        <>
          <Route path="/login" render={(props) => (
            <>
              <Home {...props} me={me} />
              <LoginModal {...props} />
            </>
          )}/>
          <Route path="/signup" render={(props) => (
            <>
              <Home {...props} me={me} />
              <SignupModal {...props} />
            </>
          )}/>
          <Route path="/files" render={(props) => (
            <>
              <Home {...props} me={me} />
              <FileDialog {...props} />
            </>
          )}/>
               <Route path="/profile" render={(props) => (
              
              <Profile {...props} />
   
          )}/>
        </>
        
      }
    
    </Switch>
  );
}
export default withRouter(App);
