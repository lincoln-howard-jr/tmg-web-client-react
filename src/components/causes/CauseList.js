import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import useElections from '../../hooks/electionHook';

function CauseList ({mm, dd, yyyy}) {
  let {election, causes, electionsErr, getElection, getCauses} = useElections (mm ,dd, yyyy);
  useEffect (() => {
    getElection ();
    getCauses ();
  }, []);
  return (
    <>
      <h2>Election for {mm}/{dd}/{yyyy}</h2>
      <h3>Currently in the {election.phase} phase</h3>
    </>
  )
}

CauseList.propTypes = {
  mm: PropTypes.number.isRequired,
  dd: PropTypes.number.isRequired,
  yyyy: PropTypes.number.isRequired
}

export default CauseList
