import React from "react";
import classNames from "classnames";
import Popup from "reactjs-popup";
import styles from "./Avatar.css";
import FileDialog from "./FileDialog";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const Avatar = () => {
  const { id } = useParams();
  const { me, getUser } = useAuth();
  const profileOwner = getUser(id)
  
  //Page level avatar img styling
  const avatarTriggerClasses = classNames({
    'profile-header-avatar': true
  });

    //Modal level avatar img sytling 
  const avatarModalClasses = classNames({
    'profile-header-avatar':true
  })

  const avatarBtnContainer = classNames({
    'profile-avatar-btn-container':true
  })

  const { profilePicture} = { profileOwner }
  const avatar = profilePicture
  const defaultAvatar = "https://cdn.staticneo.com/w/avatar/thumb/c/ce/Aang.png/200px-Aang.png";
  const src = avatar ? avatar : defaultAvatar;
  
  return (
    <Popup trigger={<img className={avatarTriggerClasses} src={src} />} modal>
      {close => (
        <div>
          <img className={avatarModalClasses} src={src} />
          <div>
            <a className="close" onClick={close}>
              &times;
            </a>
            <span className={avatarBtnContainer}>
              {(profileOwner._id === me._id)? (
                <>
                  <FileDialog />
                  <button
                    className="cancel-btn"
                    onClick={() => {
                      close();
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : null}
            </span>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Avatar;
