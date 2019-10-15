import React from 'react';
import './Home.css';
import {withRouter} from 'react-router-dom'
import CauseList from '../causes/CauseList';
import CommentList from '../comments/CommentList';

function Home () {
  let now = new Date ();
  let causeListProps = {
    mm: now.getMonth (),
    dd: now.getDate (),
    yyyy: now.getFullYear ()
  };
  return (
    <div className="main-grid">
      <div className="causes mkscroll">
        <CauseList {...causeListProps} />
      </div>
      <div className="mkscroll">
        <CommentList rootType="forums" rootId="5cb3e6510ba34c080e3d7fe5" />
      </div>
    </div>
  );
}

export default withRouter(Home);
