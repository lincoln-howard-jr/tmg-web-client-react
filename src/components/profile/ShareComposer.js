import React from "react";
import styles from './Profile.css'
import ComposerToolbar from './ComposerToolBar'
import useForm from "../../hooks/useForm";

const ShareComposer = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  const { handleChange, values } = useForm(onSubmit);
  return (
    <div className="profile-header-composer">
      <form id="share-composer">
        <label form="share-composer">
          <input type="text" onKeyDown={handleChange} placeholder="Title"></input>
        </label>
        <textarea type="text" rows="3" name="body" onKeyDown={handleChange} placeholder="Summary" />
        <div>
          <ComposerToolbar/>
        </div>
        <button  type="submit" onClick={onSubmit}>
          Share Article
        </button>
      </form>
    </div>
  );
};

export default ShareComposer;
