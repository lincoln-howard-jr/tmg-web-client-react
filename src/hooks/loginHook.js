import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// post to user log in
export default (obj) => {
  let [me, setMe] = useState ({});
  let [err, setErr] = useState (null);
  
  // actual logic
  const runLogin = async () => {
    try {
      let response = await fetch (`${base}/api/sessions`, {credentials: 'include', method: 'post', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify (obj)});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      setErr (e);
    }
  }

  useEffect (() => {
    runLogin ();
  }, [])

  return [err, me];
}