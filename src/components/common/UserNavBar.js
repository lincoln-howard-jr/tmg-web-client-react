import React from "react";
import {headerImage} from './header.png'
import {Link} from 'react-router-dom'

const UserNavBar = () => {
  return (
      <nav>
        <span><img src={headerImage} /><h1 id="title-text">TMG</h1></span>
        <div>
          <button style={{position:'relative', left:'15px'}}>
            Logout
          </button>
        </div>
      </nav>
  );
};

export default UserNavBar;
