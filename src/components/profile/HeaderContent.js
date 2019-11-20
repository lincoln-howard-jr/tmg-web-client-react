import React from "react";
import classNames from 'classnames'
import BioEditor from "../modals/BioEditor";
import BioDetails from "./BioDetails";
import FollowBtn from './FollowBtn'
import UnfollowBtn from './UnfollowBtn'
import useAuth from '../../hooks/useAuth'

const HeaderContent = ({myProfile}) => {

  const me = useAuth()
  let contentClasses = classNames({
    'header-content':true
  })

  return (
    <div className={contentClasses}>
      {myProfile? <><BioDetails/>  {me? <FollowBtn/> : <UnfollowBtn/>} </>  : 
      ( 
       <><BioDetails/><BioEditor/></> )}
    </div>
  );
};

export default HeaderContent;
