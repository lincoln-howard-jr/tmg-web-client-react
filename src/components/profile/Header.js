import React from "react";
import classNames from 'classnames'
import AvatarModal from "./AvatarModal";
import HeaderContent from "./HeaderContent";
import useAuth from '../../hooks/useAuth'


let headerClasses = classNames({
  'header-container':true,
})

const Header = () => {
  const {me:{profilePicture}} = useAuth()

  return (
    <div className={headerClasses}>
      <AvatarModal avatar={profilePicture}/>
      <HeaderContent />
      </div>
  )
}

export default Header;
