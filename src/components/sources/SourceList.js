import React from "react";
import SourceDetails from "./SourceDetails";

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
    <div>
      {sources.map(source => (
        <p>
          <SourceDetails key={source.id} source={source} />
        </p>
      ))}
    </div>
  );
};

export default SourceList;
