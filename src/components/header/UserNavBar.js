import React from "react";
import {Link} from 'react-router-dom'
const UserNavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <h1 id="title-text">The Metropolitan Global</h1>
        </div>
        <div>
          <button>
            <Link
              to={{
                pathname: "/logout",
              }}
              style={{ textDecoration: "none" }}
            >
              Logout
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserNavBar;
