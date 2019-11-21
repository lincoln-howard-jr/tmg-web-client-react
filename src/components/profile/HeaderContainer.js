import React from "react";
import classNames from 'classnames'
import AvatarModal from "../modals/Avatar";
import HeaderContent from "./HeaderContent";
import GuestNavBar from '../common/GuestNavBar'
import Search from '../common/Search'
import UserNavBar from '../common/UserNavBar'
import useAuth from '../../hooks/useAuth'
import {useParams} from 'react-router-dom'
import GlobalTopHeader from '../common/Header'

const HeaderContainer = () => {
  const {me, me:{profilePicture}} = useAuth()
  const {id} = useParams ();
  const isProfileOwner = true

let profileHeaderClasses = classNames({
  'profile-header-container':true
})
  return (
    <>
      <GlobalTopHeader />
      <div className={profileHeaderClasses}>
      <AvatarModal avatar={profilePicture}/>
      <HeaderContent myProfile={isProfileOwner} />
      </div>
    </>
  )
}

export default HeaderContainer;
