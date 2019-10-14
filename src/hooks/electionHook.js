import {useState} from 'react';
let base = 'http://localhost:8000'; // https://09xunbe0wj.execute-api.us-east-1.amazonaws.com/Experimental

// handle elections causes and voting
export default function ElectionHook () {
  let [election, setElection] = useState ({});
  let [causes, setCauses] = useState ([]);
  let [myCause, setMyCause] = useState ({});
  let [electionsErr, setErr] = useState (null);

  // get current election
  // if month/day/year provided, election from that date will be returned
  const getElection = async (mm, dd, yyyy) => {
    try {
      let response;
      if (mm !== undefined && !!dd && !!yyyy)  {
        response = await fetch (`${base}/api/elections/${mm},${dd},${yyyy}`, {credentials: 'include'});
      } else {
        response = await fetch (`${base}/api/current-election`, {credentials: 'include'});
      }
      let data = await response.json ();
      setElection (data);
    } catch (e) {
      setErr (e);
    }
  }

  // get causes from current election
  // if month/day/year provided, causes from election from that date will be returned
  const getCauses = async (mm, dd, yyyy) => {
    try {
      let response;
      if (mm !== undefined && !!dd && !!yyyy)  {
        response = await fetch (`${base}/api/elections/${mm},${dd},${yyyy}/causes`, {credentials: 'include'});
      } else {
        response = await fetch (`${base}/api/current-election/causes`, {credentials: 'include'});
      }
      let data = await response.json ();
      setCauses (data);
    } catch (e) {
      setErr (e);
    }
  }
  
  // get current cause belonging to the logged in user
  const getMyCause = async () => {
    try {
      let response = await fetch (`${base}/api/current-election/my-cause`, {credentials: 'include'});
      let data = await response.json ();
      setMyCause (data);
    } catch (e) {
      setErr (e);
    }
  }
  
  // get cause by id
  const getCauseById = async (id) => {
    try {
      let response = await fetch (`${base}/api/current-election/causes/${id}`, {credentials: 'include'});
      let data = await response.json ();
      setCauses ([data]);
    } catch (e) {
      setErr (e);
    }
  }

  return {
    election,
    causes,
    myCause,
    electionsErr,
    getElection,
    getCauses,
    getMyCause,
    getCauseById
  }

}