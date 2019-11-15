import {useState, useEffect} from 'react';
const base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

export default function useProfile() {
  const [profileOwner, setProfileOwner] = useState({});
  const [ownerErr, setErr] = useState(null);
  const abortController = new AbortController();
  const signal = abortController.signal;

  const getOwnerById = async id => {
    try {
      if (profileOwner._id || ownerErr) return;
      const response = await fetch(`${base}/api/users/${id}`, {
        credentials: "include",
        signal
      });
      const data = await response.json();
      setProfileOwner(data);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => () => abortController.abort());

  return {
    getOwnerById,
    profileOwner
  };
}