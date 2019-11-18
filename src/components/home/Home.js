import React from 'react';
import Header from '../header/Header'
import CauseList from '../causes/CauseList';
import CommentList from '../comments/CommentList';
import ArticleList from '../articles/ArticleList';
import SourceList from '../sources/SourceList'
import UserList from '../users/UserList';

function Home ({ me }) {

  let now = new Date ();
  let causeListProps = {
    mm: now.getMonth (),
    dd: now.getDate (),
    yyyy: now.getFullYear ()
  };
  return (
    <>
      <Header me={me} />
      <ArticleList />
      <UserList />
      <SourceList />
    </>
    )
  }

export default Home;
