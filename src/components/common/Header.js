import React from "react";
import PropTypes from "prop-types";
import headerImage from "./header.png";
import GuestNavBar from "./GuestNavBar";
import UserNavBar from "./UserNavBar";
import Search from "./Search";
import { useApp } from "../../AppProvider";
import styles from "./Header.css";

function Header() {
  const { me } = useApp().useAuth;
  return (
    <header>
      <div className={"global-header-grid-container"}>
        <img src={headerImage} />
        <Search /> {me._id ? <UserNavBar /> : <GuestNavBar />}
      </div>
    </header>
  );
}

Header.propTypes = {
  me: PropTypes.object.isRequired
};

export default Header;
