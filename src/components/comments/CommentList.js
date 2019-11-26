import React from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment';
import {useApp} from '../../AppProvider';

function CommentList({rootType, rootId}) {
  let {comments} = useApp ().useComments (rootType, rootId);
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
