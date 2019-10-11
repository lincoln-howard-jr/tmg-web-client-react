import React from 'react'
import PropTypes from 'prop-types'

function CauseList({causes}) {
  return (
    <div>{causes.length}</div>
  )
}

CauseList.propTypes = {
  causes: PropTypes.arrayOf (PropTypes.object).isRequired,
  likeCause: PropTypes.func.isRequired,
  selectCause: PropTypes.func.isRequired
}

export default CauseList
