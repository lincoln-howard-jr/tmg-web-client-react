import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// post to user log in
export default () => {
  let [causes, setCauses] = useState ({});
  let [err, setErr] = useState (null);
  
  // actual logic
  const runGetCauses = async () => {
    try {
      let response = await fetch (`${base}/api/current-election/causes`, {credentials: 'include'});
      let data = await response.json ();
      setCauses (data);
    } catch (e) {
      setErr (e);
    }
  }

  useEffect (() => {
    runGetCauses ();
  }, [])

  return [err, causes];
}