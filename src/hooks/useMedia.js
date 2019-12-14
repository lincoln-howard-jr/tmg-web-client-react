import {useState, useEffect} from 'react';
import base from './baseUrl'
// media hooks
export default function useMedia () {
  const [selected, setSelected] = useState ([]);
  const [media, setMedia] = useState ([])
  const [mediaErr, setMediaErr] = useState (null);
  const controller = new AbortController ();
  const signal = controller.signal;
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
        body,
        signal
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
      let response = await fetch (`${base}/api/files`, {credentials: 'include', signal});
      let data = await response.json ();
      setMedia (data);
    } catch (e) {
      setMediaErr (e);
    }
  }

  const isSelected = (target) => {
    return selected.filter (({_id})=>_id===target._id).length
  }

  const toggleSelected = (target) => {
    return () => {
      if (isSelected (target)) {
        setSelected (selected => selected.filter (({_id}) => _id!==target._id));
      } else {
        setSelected (selected => [...selected, target]);
      }
    }
  }

  useEffect (() => {
    getMedia ();
    return () => {
      controller.abort ();
    }
  }, []);

  return {
    mediaUrl,
    selected,
    isSelected,
    toggleSelected,
    media,
    mediaErr,
    upload,
    getMedia
  }
}