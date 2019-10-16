import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

function Header(props) {
  let location = props.location;
  return (
    <header>
      <nav>
        <div>
          <h1 id="title-text">The Metropolitan Global</h1>
        </div>
        <div>
          <button>
            <Link
              to={{
                pathname: "/login",
                state: { modal: true }
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
                state: { modal: true }
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
  me: PropTypes.object.isRequired,
  useHistory: PropTypes.func.isRequired
};

export default withRouter(Header);
