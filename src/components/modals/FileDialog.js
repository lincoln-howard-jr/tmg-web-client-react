import React, {useRef, useEffect} from 'react'
import {useApp} from '../../AppProvider'

const FileDialog = ({onDone, max}) => {
  const formRef = useRef(null);
  const { useMedia: {isSelected, toggleSelected, getMedia, selected, mediaUrl, media, upload}, useForm } = useApp ();
  
  const clickInput = () => {
    formRef.current.elements.file.click ();
  }

  useEffect (() => {
    getMedia ();
  }, [])

  const onSubmit = () => {
    const body = new FormData(formRef.current);
    upload (body);
    getMedia ();
  };

  const { handleSubmit, handleChange } = useForm(onSubmit);
  return (
    <>
      <ul>
        {
          media.map (m => (
            <img className={`thumbnail-image ${isSelected (m) ? 'selected' : ''}`} onClick={toggleSelected (m)} src={mediaUrl (m)} />
          ))
        }
      </ul>
      <button onClick={clickInput}>Upload</button>
      <form ref={formRef} style={{display: 'none'}}>
        <input name="file" type="file" multiple onChange={onSubmit} />
      </form>
      <button onClick={() => {onDone (selected)}}>Done!</button>
    </>
  );
};

export default FileDialog