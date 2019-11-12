import React from "react";
import Header from "./Header";
import SharesFeed from "./SharesFeed";
import Sidebar from "./Sidebar";
import styles from './Profile.css'
let classNames = require('classnames')

let mainContainer = classNames({
  'main-container':true
})

const Profile = () => {
  return (
    <div className={mainContainer}>
      <Header />
      <SharesFeed />
      <Sidebar />
    </div>
  );
};

export default Profile;
