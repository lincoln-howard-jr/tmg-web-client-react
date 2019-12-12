import React from "react";
import AvatarModal from "../modals/Avatar";
import GlobalTopHeader from '../common/Header'
import HeaderBio from "./HeaderBio";
import ShareComposer from './ShareComposer'
import {useApp} from '../../AppProvider'
import styles from './Profile.css'
import {useParams} from 'react-router-dom'

const HeaderContainer = () => {
  const app = useApp()
  const {me} = app.useAuth
  
  let profilePicture;
  if(me.profilePicture){
    profilePicture = me.profilePicture
  }
  const {id} = useParams ();
  const isProfileOwner = true

  return (
    <>
      <GlobalTopHeader />
      <div className="profile-header-grid-container">
      <AvatarModal avatar={profilePicture}/>
      <ShareComposer rootType={''}/>
      <HeaderBio myProfile={isProfileOwner} />
      </div>
    </>
  )
}

export default HeaderContainer;
