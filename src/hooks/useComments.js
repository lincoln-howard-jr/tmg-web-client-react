import {useState, useEffect} from 'react';
import base from './baseUrl'
// setup comments hook with provided type and id
// by default retrieves comments on provided object
export default function useComments (rootType, rootId) {
  const [comments, setComments] = useState ([]);
  const [likes, setLikes] = useState ([]);
  const [shares, setShares] = useState ([]);
  const [commentsErr, setErr] = useState (null);
  const controller = new AbortController ();
  const signal = controller.signal;

  // logic to retrieve comments
  const getComments = async () => {
    try {
      let response = await fetch (`${base}/api/comments/${rootType}/${rootId}`, {credentials: 'include', signal});
      let data = await response.json ();
      setComments (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }
  
  // method to create a comment on the object
  const respond = async (comment) => {
    try {
      let response = await fetch (`${base}/api/comments/${rootType}/${rootId}`, {
        credentials: 'include',
        method: 'post',
        headers: new Headers ({'Content-Type': 'application/json'}),
        body: JSON.stringify ({comment}),
        signal
      });
      let data = await response.json ();
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // method to like the object
  const likeIt = async () => {
    try {
      let response = await fetch (`${base}/api/likes/${rootType}/${rootId}`, {
        credentials: 'include',
        method: 'post',
        signal
      });
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // get likes
  const getLikes = async () => {
    try {
      let response = await fetch (`${base}/api/likes/${rootType}/${rootId}`, {credentials: 'include', signal});
      let data = await response.json ();
      setLikes (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  const share = async (summary) => {
    try {
      let response = await fetch (`${base}/api/shares/${rootType}/${rootId}`, {credentials: 'include', method: 'post', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify ({summary}), signal})
      let data = await response.json ();
      setShares (shares => [...shares, data]);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // by default runs getComments, runs again when last updated changes
  useEffect (() => {
    getComments ();
    return () => {
      console.log ('abort signal');
      controller.abort ();
    }
  }, []);
  // return state, methods, and 
  return {
    commentsErr,
    comments,
    likes,
    respond,
    likeIt,
    getLikes,
    share
  }

}