import React from "react";
import GlobalTopHeader from '../common/Header'
import CauseList from '../causes/CauseList'

const Election = () => {
  return (
    <div >
      <GlobalTopHeader/>
      <div >
          <CauseList/>
      </div>
    </div>
  );
};

export default Election;

