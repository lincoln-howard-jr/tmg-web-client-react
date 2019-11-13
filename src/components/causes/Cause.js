import React from 'react'
import PropTypes from 'prop-types';

const Cause = () => {
  return (
    <li>Cause</li>
  )
}

Cause.propTypes = {
  cause: PropTypes,
  likeCause: PropTypes.func.isRequired,
  selectCause: PropTypes.func.isRequired
}

export default Cause
