import {useState, useEffect} from 'react';
import base from './baseUrl'
export default function useAuth () {
  const [me, setMe] = useState ({});
  const [meErr, setErr] = useState (null);
  const [user, setUser] = useState({});
  const [userErr, setUserErr] = useState(null);
  const abortController = new AbortController ();
  const signal = abortController.signal;
  
  const getUserById = async (id) => {
    try {
      let response = await fetch (`${base}/api/users/${id}`, {credentials: 'include', signal});
      let data = await response.json ();
      setUser (data);
    } catch (e) {
      if (!e.name || !e.name === 'AbortError')
        setErr (e);
    }
  }

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

  const logout = async (obj) => {
    try {
      await fetch (`${base}/api/sessions`, {credentials: 'include', method: 'delete', signal});
      setMe ({});
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  const getMe = async () => {
    try {
      if (me._id || meErr) return;
      let response = await fetch (`${base}/api/me`, {credentials: 'include', signal});
      let data = await response.json ();
      setMe (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  const getUser = async id => {
    try {
      if (user._id || userErr) return;
      const response = await fetch(`${base}/api/users/${id}`, {credentials: 'include', signal});
      const data = await response.json();
      setUser(data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  };

  const clearErr = async () => {
    setErr (null);
    setUserErr(null);
  }

  const updateUser = async obj => {
    try {
      if (user._id || userErr) return;
      const response = await fetch (`${base}/api/users`, {credentials: 'include', method: 'put', headers: new Headers ({'Content-Type': 'application/json'}), body: JSON.stringify (obj), signal});
    } catch (e) {
      setUserErr (e);
    }
  }

  useEffect (() => {
    getMe ();

    return () => abortController.abort ();
  }, []);

  return {
    getUserById,
    meErr,
    me,
    user,
    getMe,
    login,
    logout,
    signup,
    clearErr,
    meErr,
  }
}