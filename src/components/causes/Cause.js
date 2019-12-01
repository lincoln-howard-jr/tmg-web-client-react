import React from 'react'
import PropTypes from 'prop-types';
import CauseContainer from './CauseContainer'
import GlobalTopHeader from '../common/Header'

const Cause = () => {
  return (
    <>
    <GlobalTopHeader/>
    <CauseContainer/>
    </>
  )
}

Cause.propTypes = {
  cause: PropTypes,
  likeCause: PropTypes.func.isRequired,
  selectCause: PropTypes.func.isRequired
}

export default Cause
