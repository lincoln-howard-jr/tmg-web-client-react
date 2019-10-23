import React, {useRef} from 'react'
import Popup from 'reactjs-popup';
import useMedia from '../../hooks/useMedia';
import useForm from '../../hooks/useForm';

function FileDialog () {
  const formRef = useRef (null);
  let {selected, mediaErr, upload} = useMedia ();
  const onSubmit = () => {
    let body = new FormData (formRef.current);
    upload (body);
  }
  let {handleSubmit, handleChange} = useForm (onSubmit);
  return (
    <Popup open={true}>
      <>
      {
        Array.isArray (selected) &&
        <>
          {
            selected.map (media => (
              <div>media with id {media._id}</div>
            ))
          }
        </>
      }
      {
        !!selected &&
        <div>media with id {selected._id}</div>
      }
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="file" name="upload" onChange={handleChange} />
        <input type="submit" />
      </form>
      </>
    </Popup>
  )
}

export default FileDialog
