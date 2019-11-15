import React from "react";
import classNames from "classnames";
import Popup from "reactjs-popup";
import styles from "./Avatar.css";
import FileDialog from "./FileDialog";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import useProfile from '../../hooks/useProfile'

const AvatarModal = () => {
  //Get user id of profile owner
  const { id } = useParams();
  const { me } = useAuth();
  const { getOwnerById } = useProfile()
  const profileOwner = getOwnerById(id)

    //Styling for "Page" avatar 
 const avatarClasses = classNames({
    'avatar-header': true
  });

    //Styling for "In-Modal" avatar 
  const avatarModalClasses = classNames({
    'avatar-modal':true
  })
  //TODO: Rename {profilePicture:} to {avatar:}
  const { profilePicture} = { profileOwner }
  const avatar = profilePicture
  const defaultAvatar = "https://cdn.staticneo.com/w/avatar/thumb/c/ce/Aang.png/200px-Aang.png";
  const src = avatar ? avatar : defaultAvatar;
  return (
    <Popup trigger={<img className={avatarClasses} src={src} />} modal>
      {close => (
        <div>
          <img className={avatarModalClasses} src={src} />
          <div>
            <a className="close" onClick={close}>
              &times;
            </a>
            <div>
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
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AvatarModal;
