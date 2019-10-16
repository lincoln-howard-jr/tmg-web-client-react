import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <h1 id="title-text">The Metropolitan Global</h1>
        </div>

        <div>
          {<span>Welcome</span>}
          <Link
            to={{
              pathname: "/login",
              state: { modal: true }
            }}
          >
            Login
          </Link>
          <Link
            to={{
              pathname: "/signup",
              state: { modal: true }
            }}
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  me: PropTypes.object.isRequired,
  useHistory: PropTypes.func.isRequired
};

export default withRouter(Header);
