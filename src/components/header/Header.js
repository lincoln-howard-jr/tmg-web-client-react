import React from "react";
import PropTypes from "prop-types";
import { withRouter} from "react-router-dom";

function Header(props) {

  let history = props.history

  function handleClickLogin() {
    history.push("/login");
  }
  function handleClickSignup() {
    history.push("/signup");
  }
  return (
    <header>
      <nav>

        <div>
          <h1 id="title-text">The Metropolitan Global</h1>
        </div>

        <div>
          {<span>Welcome</span>}
          <button type="button" onClick={handleClickLogin}>
            Login
          </button>
          <button type="button" onClick={handleClickSignup}>
            Signup
          </button>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  me: PropTypes.object.isRequired,
  useHistory: PropTypes.func.isRequired,

};

export default withRouter(Header);
