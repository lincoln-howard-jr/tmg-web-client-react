import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// post to user log in
export default () => {
  let [election, setElection] = useState ({});
  let [err, setErr] = useState (null);
  
  // actual logic
  const runGetElection = async () => {
    try {
      let response = await fetch (`${base}/api/current-election`, {credentials: 'include'});
      let data = await response.json ();
      setElection (data);
    } catch (e) {
      setErr (e);
    }
  }

  useEffect (() => {
    runGetElection ();
  }, [])

  return [err, election];
}