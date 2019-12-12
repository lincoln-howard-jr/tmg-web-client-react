import React from "react";
import {useApp} from "../../AppProvider";
import Popup from "reactjs-popup";
import ShareArticle from "../articles/ShareArticle";

const AddArticle = () => {
  const { useForm } = useApp();

  // const validator = {
  //   description: value => {
  //     return value.length < 80;
  //   }
  // };

  // const onSubmit = async (validity, values) => {
  //   console.log(validity, values);
  // };

  // const { err, handleChange, handleSubmit } = useForm(
  //   validator,
  //   onSubmit
  // );

  return (
    <Popup trigger={<button type="button">+ Article</button>} modal>
      {close => (
        <ShareArticle /> 
      )}
    </Popup>
  );
};

export default AddArticle;
