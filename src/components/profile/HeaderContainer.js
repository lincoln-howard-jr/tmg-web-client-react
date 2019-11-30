import React from "react";
import AvatarModal from "../modals/Avatar";
import GlobalTopHeader from '../common/Header'
import HeaderBio from "./HeaderBio";
import ShareComposer from './ShareComposer'
import useAuth from '../../hooks/useAuth'
import styles from './Profile.css'
import {useParams} from 'react-router-dom'

const HeaderContainer = () => {
  const {me, me:{profilePicture}} = useAuth()
  const {id} = useParams ();
  const isProfileOwner = true

  return (
    <>
      <GlobalTopHeader />
      <div className="profile-header-container-flex">
      <AvatarModal avatar={profilePicture}/>
      <ShareComposer/>
      <HeaderBio myProfile={isProfileOwner} />
      </div>
    </>
  )
}

export default HeaderContainer;
