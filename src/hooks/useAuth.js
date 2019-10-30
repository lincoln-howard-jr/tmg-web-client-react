import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// auth hooks
export default function useAuth () {
  const [me, setMe] = useState ({});
  const [meErr, setErr] = useState (null);
  const controller = new AbortController ();
  const signal = controller.signal;
  
  // user login method
  const login = async (obj) => {
    try {
      if (me._id) return;
      let response = await fetch (`${base}/api/sessions`, {credentials: 'include', method: 'post', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify (obj), signal});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // user signup
  const signup = async (obj) => {
    if (me._id) return;
    try {
      let response = await fetch (`${base}/api/users`, {credentials: 'include', method: 'post', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify (obj), signal});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // logout
  const logout = async (obj) => {
    try {
      await fetch (`${base}/api/sessions`, {credentials: 'include', method: 'delete', signal});
      setMe ({});
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // get logged in user
  const getMe = async () => {
    try {
      if (me._id || meErr) return;
      let response = await fetch (`${base}/api/sessions`, {credentials: 'include', signal});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }
  const clearErr = async () => {
    setErr (null);
  }

  useEffect (() => () => controller.abort ());

  // return an object containing resulting data and methods
  return {
    meErr,
    me,
    login,
    signup,
    logout,
    getMe,
    clearErr
  }
}