import React from "react";
import classNames from 'classnames'
import AvatarModal from "../modals/Avatar";
import HeaderContent from "./HeaderContent";
import useAuth from '../../hooks/useAuth'
import {useParams} from 'react-router-dom'

const HeaderContainer = () => {
  const {me, me:{profilePicture}} = useAuth()
  const {id} = useParams ();

//testing edit, default to true

  const isProfileOwner = true

let headerClasses = classNames({
  'header-container':true,
})
  return (
    <div className={headerClasses}>
      <AvatarModal avatar={profilePicture}/>
      <HeaderContent myProfile={isProfileOwner} />
      </div>
  )
}

export default HeaderContainer;
