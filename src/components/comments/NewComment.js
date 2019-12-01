import React, {useState} from 'react'
import NewCommentList from './CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown, faThumbsUp, } from '@fortawesome/free-solid-svg-icons';

function Comment({comment}) {
  let [open, setOpen] = useState (false);
  return (
    <li className={`comment${open ? ' open' : ''}`}>
      <div className="comment-container">
        <span className="comment-content">{comment.comment}</span>
        <span className="comment-info">
          <div>
            <span className="comment-info-founder">- {comment.user.first} {comment.user.last}</span>
            {
              (comment.likes > 0) &&
              <span className="comment-likes">
                <span>{comment.likes}</span>
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
            }
            <span className="comment-open-close" onClick={() => {setOpen (!open)}}>
              {
                open &&
                <FontAwesomeIcon icon={faChevronUp} />
              }
              {
                !open &&
                <FontAwesomeIcon icon={faChevronDown} />
              }
            </span>
          </div>
        </span>
      </div>
      <NewCommentList rootType="comments" rootId={comment._id} />
    </li>
  )
}

export default Comment
