import React from "react";
import classNames from 'classnames'
const AvatarModal = props => {

  let avatarClasses = classNames({
    'avatar':true
  })

  const { avatar } = props;
  const defaultAvatar = "https://cdn.staticneo.com/w/avatar/thumb/c/ce/Aang.png/200px-Aang.png";
  let src = avatar ? avatar : defaultAvatar;
  return (
      <img className={avatarClasses} src={src} />
 
  );
};

export default AvatarModal;