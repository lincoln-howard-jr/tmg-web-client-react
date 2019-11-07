import React from "react";
import HeaderContent from "./HeaderContent";
import AvatarModal from "./AvatarModal";
import useAuth from '../../hooks/useAuth'


const Header = () => {
  const {me:{profilePicture}} = useAuth()

  return (
    <div>
      <AvatarModal avatar={profilePicture}/>
      <HeaderContent />
    </div>
  )
}

export default Header;
