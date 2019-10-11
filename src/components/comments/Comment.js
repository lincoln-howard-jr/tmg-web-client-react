import React from './node_modules/react'
import PropTypes from 'prop-types';

function Comment() {
  return (
    
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  selectComment: PropTypes.func.isRequired,
  likeComment: PropTypes.func.isRequired
}

export default Comment
