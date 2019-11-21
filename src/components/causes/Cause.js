import React from 'react'
import PropTypes from 'prop-types';
import CauseContainer from './CauseContainer'
import MainHeader from '../common/Header'

const Cause = () => {
  console.log(MainHeader)
  return (
    <>
    <MainHeader/>
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
