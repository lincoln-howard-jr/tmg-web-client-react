import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// media hooks
export default function useMedia () {
  const [selected, setSelected] = useState ([]);
  const [media, setMedia] = useState ([])
  const [mediaErr, setMediaErr] = useState (null);
  const mediaBaseUrl = 'https://image-bucket-for-tmg-frontend.s3.amazonaws.com';
  const mediaUrl = (media) => {
    return `${mediaBaseUrl}/${media.user}/${media._id}.${media.extension}`;
  }

  // body is of type FormData
  const upload = async (body) => {
    try {
      let response = await fetch (`${base}/api/files`, {
        credentials: 'include',
        method: 'post',
        body
      });
      let data = await response.json ();
      setMedia (media => {return [...media, data]});
      setSelected (selected => {return [...selected, data]});
    } catch (e) {
      setMediaErr (e);
    }
  }

  // get all media owned by this user
  const getMedia = async () => {
    try {
      let response = await fetch (`${base}/api/files`, {credentials: 'include'});
      let data = await response.json ();
      setMedia (data);
    } catch (e) {
      setMediaErr (e);
    }
  }

  useEffect (() => {
    getMedia ();
  }, []);

  return {
    mediaUrl,
    selected,
    media,
    mediaErr,
    upload,
    getMedia
  }
}