import React from "react";
import styles from "./Profile.css";
import ComposerToolbar from "./ComposerToolBar";
import { useApp } from "../../AppProvider";

const ShareComposer = () => {
  const onSubmit = e => {};
  const { useForm, useAuth } = useApp();
  const { handleChange, values } = useForm(onSubmit);
  const { me } = useAuth;
  return (
    <div className="profile-header-grid-container profile-header-share-composer-grid-container">
      <form id="share-composer">
        <label form="share-composer">
          <input style={{width:"200%", height:"110%", fontSize:"25px"}}
            type="text"
            onKeyDown={handleChange}
            placeholder="Headline"
          ></input>
        </label>
        <label form="share-composer">
          <textarea
            type="text"
            rows="3"
            name="body"
            onKeyDown={handleChange}
            placeholder={`What's the scoop, ${me.first} ?`}
          />
        </label>
          <ComposerToolbar />
      </form>
    </div>
  );
};

export default ShareComposer;
