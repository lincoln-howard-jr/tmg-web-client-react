import React from "react";
import styles from './Profile.css'
import ComposerToolbar from './ComposerToolBar'
import useForm from "../../hooks/useForm";

const ShareComposer = () => {
  const onSubmit = e => {
  };
  const { handleChange, values } = useForm(onSubmit);
  return (
    <div className="profile-header-grid-container profile-header-share-composer-grid-container">
      <form id="share-composer">
        <label form="share-composer">
          <input type="text" onKeyDown={handleChange} placeholder="Title"></input>
        </label>
        <label form="share-composer">
        <textarea type="text" rows="3" name="body" onKeyDown={handleChange} placeholder="Summary" />
        </label>

        <div>
          <ComposerToolbar/>
        </div>
      </form>
    </div>
  );
};

export default ShareComposer;
