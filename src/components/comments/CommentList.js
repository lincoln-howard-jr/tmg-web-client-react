import React from 'react'
import Comment from './Comment';
import useComments from '../../hooks/commentsHook';
import PropTypes from 'prop-types';

function CommentList({rootType, rootId}) {
  let {commentsErr, comments} = useComments (rootType, rootId);
  return (
    <ul className="comments-list">
      {
        comments.map (comment => <Comment comment={comment} key={`comment-${comment._id}`} />)
      }
    </ul>
  )
}

CommentList.propTypes = {
  rootType: PropTypes.string.isRequired,
  rootId: PropTypes.string.isRequired
}

export default CommentList
