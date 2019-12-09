import React from "react";
import styles from './Profile.css'
import BioEditor from "../modals/BioEditor";
import BioDetails from "./BioDetails";
import FollowBtn from './FollowBtn'
import UnfollowBtn from './UnfollowBtn'
import {useApp} from '../../AppProvider'

const HeaderBio = ({myProfile}) => {
  const app = useApp()
  const {me} = app.useAuth

  return (
    <div className='profile-header-bio-grid-container'>
      {myProfile? <><h4>John Doe</h4><BioDetails/>  {me? <FollowBtn/> : <UnfollowBtn/>} </>  : 
      ( 
       <><BioDetails/><BioEditor/></> )}
    </div>
  );
};

export default HeaderBio;
