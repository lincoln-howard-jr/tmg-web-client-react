import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// setup comments hook with provided type and id
// by default retrieves comments on provided object
export default function useComments (rootType, rootId) {
  const [comments, setComments] = useState ([]);
  const [likes, setLikes] = useState ([]);
  const [commentsErr, setErr] = useState (null);
  

  // logic to retrieve comments
  const getComments = async () => {
    try {
      let response = await fetch (`${base}/api/comments/${rootType}/${rootId}`, {credentials: 'include'});
      let data = await response.json ();
      setComments (data);
    } catch (e) {
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
        body: JSON.stringify ({comment})
      });
      let data = await response.json ();
    } catch (e) {
      setErr (e);
    }
  }

  // method to like the object
  const likeIt = async () => {
    try {
      let response = await fetch (`${base}/api/likes/${rootType}/${rootId}`, {
        credentials: 'include',
        method: 'post'
      });
      let data = await response.json ();
    } catch (e) {
      setErr (e);
    }
  }

  // get likes
  const getLikes = async () => {
    try {
      let response = await fetch (`${base}/api/likes/${rootType}/${rootId}`, {credentials: 'include'});
      let data = await response.json ();
      setLikes (data);
    } catch (e) {
      setErr (e);
    }
  }

  // by default runs getComments, runs again when last updated changes
  useEffect (() => {
    getComments ();
  }, []);

  // return state, methods, and 
  return {
    commentsErr,
    comments,
    likes,
    respond,
    likeIt,
    getLikes
  }

}