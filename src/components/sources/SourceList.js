import React from "react";
import Source from "./Source";

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

const SourceList = () => {
  return (
    <ul>
      {sources.map(source => (
        <li>
          <Source key={source.id} source={source} />
        </li>
      ))}
    </ul>
  );
};

export default SourceList;
