import React, {useState} from 'react';
import './Home.css';
import CauseList from '../causes/CauseList';
import CommentList from '../comments/CommentList'

function Home () {
  let [election, setElection] = useState ({});
  let [causes, setCauses] = useState ([]);
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

export default Home;
