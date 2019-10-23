import React from 'react';
import './Home.css';
import Header from '../header/Header'
import CauseList from '../causes/CauseList';
import CommentList from '../comments/CommentList';

function Home ({me}) {
  let now = new Date ();
  let causeListProps = {
    mm: now.getMonth (),
    dd: now.getDate (),
    yyyy: now.getFullYear ()
  };
  return (
    <div>
    <Header me={me} />
    <div className="main-grid">
      <div className="causes mkscroll">
        <CauseList {...causeListProps} />
      </div>
      <div className="mkscroll">
        <CommentList rootType="forums" rootId="5cb3e6510ba34c080e3d7fe5" />
      </div>
    </div>
    </div>
  )
}

export default Home;
