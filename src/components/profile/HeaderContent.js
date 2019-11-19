import React from "react";
import classNames from 'classnames'
import BioEditor from "../modals/BioEditor";
import BioDetails from "./BioDetails";
import FollowBtn from './FollowBtn'

const HeaderContent = ({myProfile}) => {
  let contentClasses = classNames({
    'header-content':true
  })

//Add conditional check after first half of ternary for if user already follows current profile
//If true, render the unfollow button.
//Make backend route for followers

  return (
    <div className={contentClasses}>
      {!myProfile? <><BioDetails/>  <FollowBtn/></>  : 
      ( 
       <><BioDetails/><BioEditor/></> )}
    </div>
  );
};

export default HeaderContent;
