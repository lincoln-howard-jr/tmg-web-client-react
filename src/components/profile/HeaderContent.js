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
    'profile-header-content':true,
  })


  //pending /users/:id route
  return (
    <div className={contentClasses}>
      {myProfile? <><h4>John Doe</h4><BioDetails/>  {me? <FollowBtn/> : <UnfollowBtn/>} </>  : 
      ( 
       <><BioDetails/><BioEditor/></> )}
    </div>
  );
};

export default HeaderContent;
