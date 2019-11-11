import React from "react";
import classNames from 'classnames'
import HeaderContent from "./HeaderContent";
import AvatarModal from "./AvatarModal";
import useAuth from '../../hooks/useAuth'


let headerClasses = classNames({
  'header':true
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
