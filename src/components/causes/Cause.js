import React from 'react'
import PropTypes from 'prop-types';

function Cause() {
  return (
    "Div"
  )
}

Cause.propTypes = {
  cause: PropTypes,
  likeCause: PropTypes.func.isRequired,
  selectCause: PropTypes.func.isRequired
}

export default Cause