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
  siteName: "MonthlyMonthly",
  url: "www.monthlymonthly.com",
  followingCount: 9
};

const sources = [sourceA, sourceB, sourceC];

const SourceList = () => {
  return(
  <div>
  {sources.map(source => <Source source={source} />)};
  </div>
  )
};

export default SourceList;
