import {useState} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// media hooks
export default function useMedia () {
  const [selected, setSelected] = useState ([]);
  const [media, setMedia] = useState ([])
  const [mediaErr, setMediaErr] = useState (null);

  // body is of type FormData
  const upload = async (body) => {
    try {
      let response = await fetch (`${base}/api/files`, {
        credentials: 'include',
        method: 'post',
        body
      });
      let data = await response.json ();
      setSelected (data);
    } catch (e) {
      setMediaErr (e);
    }
  }

  return {
    selected,
    media,
    mediaErr,
    upload
  }
}