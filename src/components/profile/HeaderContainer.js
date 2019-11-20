import React from "react";
import classNames from 'classnames'
import AvatarModal from "../modals/Avatar";
import HeaderContent from "./HeaderContent";
import GuestNavBar from '../header/GuestNavBar'
import UserNavBar from '../header/UserNavBar'
import useAuth from '../../hooks/useAuth'
import {useParams} from 'react-router-dom'

const HeaderContainer = () => {
  const {me, me:{profilePicture}} = useAuth()
  const {id} = useParams ();
  const isProfileOwner = true

let headerClasses = classNames({
  'flex-header-container':true,
})
  return (
    <>
    {!me? <UserNavBar/> : <GuestNavBar/>}
    <div className={headerClasses}>
      <AvatarModal avatar={profilePicture}/>
      <HeaderContent myProfile={isProfileOwner} />
      </div>
      </>
  )
}

export default HeaderContainer;
