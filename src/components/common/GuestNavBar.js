import React from "react";
import headerImage from './header.png'
import { withRouter} from "react-router-dom";
import Login from '../modals/Login'
import Signup from '../modals/Signup'
import { useLocation } from "react-router-dom";

const GuestNavBar = () => {

  const location = useLocation();

  return (
      <nav>
        <h6>Already have an account?   </h6> <Login/>
        <Signup/>
      </nav>
  );
};

export default withRouter(GuestNavBar);
