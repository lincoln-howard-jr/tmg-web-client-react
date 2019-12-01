import List from '../common/List';
import NewComment from './NewComment';
import React from 'react'
import {useApp} from '../../AppProvider';

function NewCommentList({rootType, rootId}) {
  const {comments} = useApp ().useComments (rootType, rootId);
  return (
    <List render={comment => props => (
      <NewComment comment={comment} />
    )} data={comments} />
  )
}

export default NewCommentList
