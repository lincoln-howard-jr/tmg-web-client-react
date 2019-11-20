import React from "react";
import headerImage from '../header/header.png'
import { withRouter, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GuestNavBar = () => {

  const location = useLocation();
  return (
    <div>
      <nav>
        <div>
         <span><img src={headerImage} /><h1 id="title-text">The Metropolitan Global</h1></span>
        </div>
        <div>
          <button>
            <Link
              to={{
                pathname: "/login",
                state: { modal: true, background: location }
              }}
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </button>
          <button>
            <Link
              to={{
                pathname: "/signup",
                state: { modal: true, background: location }
              }}
              style={{ textDecoration: "none" }}
            >
              Signup
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(GuestNavBar);
