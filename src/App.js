import React, { useState } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import useAuth from "./hooks/authHook";
import LoginModal from "./components/modals/LogInModal";
import SignupModal from "./components/modals/Signup";

function App() {
  let { ret, login, signup, getMe } = useAuth();
  let [meErr, me] = ret;
  return (
    <div className="links">
    <Home/>
    </div>
  );
}
export default withRouter(App);
