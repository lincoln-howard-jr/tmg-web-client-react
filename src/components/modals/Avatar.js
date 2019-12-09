import React from "react";
import Popup from "reactjs-popup";
import styles from "./Avatar.css";
import FileDialog from "./FileDialog";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const Avatar = () => {
  const { id } = useParams();
  const { me, getUser } = useAuth();
  const profileOwner = 'cd310943109'

    //Modal level avatar img sytling 

  const { profilePicture} = { profileOwner }
  const avatar = profilePicture
  const defaultAvatar = "https://cdn.staticneo.com/w/avatar/thumb/c/ce/Aang.png/200px-Aang.png";
  const src = avatar ? avatar : defaultAvatar;
  
  return (
    <Popup trigger={<div className='profile-header-grid-container profile-header-avatar-col'><img src={src} /></div>} modal>
      {close => (
        <div>
          <img className='profile-header-avatar-modal' src={src} />
          <div>
            <a className="close" onClick={close}>
              &times;
            </a>
            <span>
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
