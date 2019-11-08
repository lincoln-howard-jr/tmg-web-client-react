import React from "react";

const AvatarModal = props => {
  const { avatar } = props;
  const defaultAvatar = "https://cdn.staticneo.com/w/avatar/thumb/c/ce/Aang.png/200px-Aang.png";
  let src = avatar ? avatar : defaultAvatar;
  return (
    <div>
      <img src={src} />
    </div>
  );
};

export default AvatarModal;
