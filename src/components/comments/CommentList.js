import React from 'react'
import PropTypes from 'prop-types';

function CommentList({comments}) {
  return (
    <div>{comments.length}</div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf (PropTypes.object).isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  selectComment: PropTypes.func.isRequired,
  likeComment: PropTypes.func.isRequired
}

export default CommentList
