import React from "react";
import Header from "./Header";
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
      <Header />
      <div className={feedSidebarClasses}>
        <SharesFeed />
          <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
