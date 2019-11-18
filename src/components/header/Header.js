import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import headerImage from './header.png';
import styles from './Header.css'
import classNames from 'classnames'

const imgClasses = classNames({
  'header-img':true
})

function Header({location}) {
  return (
    <header>
      <img className={imgClasses} src={headerImage}></img>
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
