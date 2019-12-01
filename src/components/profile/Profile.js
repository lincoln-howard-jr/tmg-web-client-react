import React from "react";
import HeaderContainer from "./HeaderContainer";
import SharesFeed from "./SharesFeed";
import SourceList from '../sources/SourceList'
import styles from "./Profile.css";
import classNames from 'classnames';

let mainClasses = classNames({
  "profile-main-container-flex": true
});

let feedSidebarClasses = classNames({
  "profile-center-content-container-flex": true});

const Profile = () => {
  return (
    <div className={mainClasses}>
      <HeaderContainer/>
      <div className={feedSidebarClasses}>
        <SharesFeed />
          <SourceList/>
      </div>
    </div>
  );
};

export default Profile;
