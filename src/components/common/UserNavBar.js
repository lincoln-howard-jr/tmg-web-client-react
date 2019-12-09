import React from "react";
import { headerImage } from "./header.png";
import { useApp } from "../../AppProvider";

const UserNavBar = () => {
  const app = useApp();
  const { logout } = app.useAuth;

  return (
    <nav>
      <span>
        <img src={headerImage} />
      </span>
      <div>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default UserNavBar;
