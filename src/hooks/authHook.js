import {useState, useEffect} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// auth hooks
export default function AuthHook () {
  const [me, setMe] = useState ({});
  const [meErr, setErr] = useState (null);
  
  // user login method
  const login = async (obj) => {
    try {
      if (me._id) return;
      let response = await fetch (`${base}/api/sessions`, {credentials: 'include', method: 'post', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify (obj)});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      setErr (e);
    }
  }

  // user signup
  const signup = async (obj) => {
    if (me._id) return;
    try {
      let response = await fetch (`${base}/api/users`, {credentials: 'include', method: 'post', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify (obj)});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      setErr (e);
    }
  }

  // logout
  const logout = async (obj) => {
    try {
      await fetch (`${base}/api/sessions`, {credentials: 'include', method: 'delete'});
      setMe ({});
    } catch (e) {
      setErr (e);
    }
  }

  // get logged in user
  const getMe = async () => {
    try {
      if (me._id || meErr) return;
      let response = await fetch (`${base}/api/sessions`, {credentials: 'include'});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      setErr (e);
    }
  }
  
  const clearErr = async () => {
    setErr (null);
  }

  // return an object containing resulting data and methods
  return {
    ret: [meErr, me],
    login,
    signup,
    logout,
    getMe,
    clearErr
  }
}