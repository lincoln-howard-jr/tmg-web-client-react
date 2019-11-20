import React from "react";
import HeaderContainer from "./HeaderContainer";
import SharesFeed from "./SharesFeed";
import Sidebar from "./Sidebar";
import styles from "./Profile.css";
import classNames from 'classnames'

let mainClasses = classNames({
  "main-container": true
});

let feedSidebarClasses = classNames({
  "feed-sidebar-container": true});

const Profile = () => {
  return (
    <div className={mainClasses}>
      <HeaderContainer/>
      <div className={feedSidebarClasses}>
        <SharesFeed />
          <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
