import React from "react";
import Login from '../modals/Login'
import Signup from '../modals/Signup'

const GuestNavBar = () => {

  return (
      <nav>
        <h6>Already have an account?</h6> <Login/>
        <Signup/>
      </nav>
  );
};

export default GuestNavBar;
