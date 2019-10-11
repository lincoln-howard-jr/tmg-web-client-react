import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// post to user log in
export default () => {
  let [myCause, setMyCause] = useState ({});
  let [err, setErr] = useState (null);
  
  // actual logic
  const runGetMyCause = async () => {
    try {
      let response = await fetch (`${base}/api/current-election/my-cause`, {credentials: 'include'});
      let data = await response.json ();
      setMyCause (data);
    } catch (e) {
      setErr (e);
    }
  }

  useEffect (() => {
    runGetMyCause ();
  }, [])

  return [err, myCause];
}