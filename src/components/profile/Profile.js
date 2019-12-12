import React from "react";
import HeaderContainer from "./HeaderContainer";
import SharesFeed from "./SharesFeed";
import SourceList from '../sources/SourceList'
import styles from "./Profile.css";

const Profile = () => {
  return (
    <div className= "profile-main-grid-container">
      <HeaderContainer/>
      <div className="profile-center-content-grid-container">
        <SharesFeed />
          <SourceList containerClass={'profile-source-container'}/>
      </div>
    </div>
  );
};

export default Profile;
