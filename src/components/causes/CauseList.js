import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from './Cause.css'
import useElections from '../../hooks/useElection';

let placeholderData = [{
  title: 'Save the Honeybees',
  actionPlan: 'First, A, then B, then C.',
  created: '11/11/2019',
  phase: 'start',
  old: false
}, {
  title: 'Save the Whales',
  actionPlan: 'First, A, then B, then C.',
  created: '11/13/2019',
  phase: 'start',
  old: false
}, {
  title: 'Save the Dolphins',
  actionPlan: 'First, A, then B, then C.',
  created: '11/12/2019',
  phase: 'start',
  old: false
}]


function CauseList ({mm, dd, yyyy}) {
  let {election, causes, electionsErr, getElection, getCauses} = useElections (mm ,dd, yyyy);
  useEffect (() => {
    getElection ();
    getCauses ();
  }, []);
  return (
    <div className={'cause-list-container-flex'}>
      {placeholderData.map(cause => (<div>
        <h3>Cause Title: {cause.title}</h3>
        <p>Action Plan: {cause.actionPlan}</p>
        <p>Created: {cause.created}</p>
   </div>
      ))}
    </div>
  )
}

CauseList.propTypes = {
  mm: PropTypes.number.isRequired,
  dd: PropTypes.number.isRequired,
  yyyy: PropTypes.number.isRequired
}

export default CauseList
