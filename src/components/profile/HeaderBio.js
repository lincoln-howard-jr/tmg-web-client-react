import React from "react";
import classNames from 'classnames'
import styles from './Profile.css'
import BioEditor from "../modals/BioEditor";
import BioDetails from "./BioDetails";
import FollowBtn from './FollowBtn'
import UnfollowBtn from './UnfollowBtn'
import useAuth from '../../hooks/useAuth'

const HeaderBio = ({myProfile}) => {

  const me = useAuth()
  let bioClasses = classNames({
    'profile-header-bio-flex':true,
  })


  //pending /users/:id route
  return (
    <div className={bioClasses}>
      {myProfile? <><h4>John Doe</h4><BioDetails/>  {me? <FollowBtn/> : <UnfollowBtn/>} </>  : 
      ( 
       <><BioDetails/><BioEditor/></> )}
    </div>
  );
};

export default HeaderBio;
