import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import headerImage from './header.png';

function Header(props) {
  let location = props.location;
  return (
    <header>
      <img src={headerImage}></img>
      <nav>
        <div>
          <h1 id="title-text">The Metropolitan Global</h1>
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
    </header>
  );
}

Header.propTypes = {
  me: PropTypes.object.isRequired
};

export default withRouter(Header);
