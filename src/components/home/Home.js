import React, {useState} from 'react';
import './Home.css';
import {withRouter} from 'react-router-dom'
import CauseList from '../causes/CauseList';
import CommentList from '../comments/CommentList';
import useGetElection from '../../hooks/electionHook';
import useGetCauses from '../../hooks/causesHook';

function Home () {
  let [electionErr, election] = useGetElection ();
  console.log (electionErr, election);
  let [causeErr, causes] = useGetCauses ();
  console.log (causeErr, causes);
  let [comments, setComments] = useState ([]);
  return (
    <div class="main-grid">
      <div class="causes mkscroll">
        <h3 id="cause-list-heading"></h3>
        <CauseList causes={causes} />
      </div>
      <div class="mkscroll">
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default withRouter(Home);
