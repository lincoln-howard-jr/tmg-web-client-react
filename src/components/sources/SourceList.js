import React from "react";
import SourceDetails from "./SourceDetails";
import styles from '../profile/Profile.css'

const sourceA = {
  id: "1",
  siteName: "Daily Daily",
  url: "www.dailydaily.com",
  followingCount: 9
};
const sourceB = {
  id: "2",
  siteName: "Weekly Weely",
  url: "www.weeklyweekly.com",
  followingCount: 9
};
const sourceC = {
  id: "3",
  siteName: "Monthly Monthly",
  url: "www.monthlymonthly.com",
  followingCount: 9
};

const sources = [sourceA, sourceB, sourceC];

const SourceList = ({containerClass}) => {
  return (
    <div className={containerClass? containerClass : ''}>
      {sources.map(source => (
        <p>
          <SourceDetails key={source.id} source={source} />
        </p>
      ))}
    </div>
  );
};

export default SourceList;
