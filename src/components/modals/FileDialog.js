import React, {useRef} from 'react'
import Popup from 'reactjs-popup';
import styles from './FileDialog.css';
import useMedia from '../../hooks/useMedia';
import useForm from '../../hooks/useForm';

const FileDialog = () => {
  const formRef = useRef(null);
  const { upload } = useMedia();
  
  const onSubmit = () => {
    const body = new FormData(formRef.current);
    upload(body);
  };

  const { handleSubmit, handleChange } = useForm(onSubmit);
  return (
    <Popup
      trigger={<button className="upload-btn">Update</button>}
      closeOnDocumentClick
      modal
    >
      <form style={{ height: "50px"}}  ref={formRef} onSubmit={handleSubmit}>
        <input type="file" name="upload" onChange={handleChange} />
        <input  type="submit" />
      </form>
    </Popup>
  );
};

export default FileDialog
