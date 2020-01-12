import React from "react";
import {useApp} from "../../AppProvider";
import Popup from "reactjs-popup";
import ShareArticle from "../articles/ShareArticle";

const AddArticle = () => {
  return (
    <Popup trigger={<button type="button">+ Article</button>} modal>
      {close => (
        <ShareArticle /> 
      )}
    </Popup>
  );
};

export default AddArticle;
