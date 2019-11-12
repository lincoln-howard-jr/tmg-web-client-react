import React from "react";
import classNames from 'classnames'
import ArticleList from "../articles/ArticleList";

const SharesFeed = () => {

  let feedClasses = classNames({
    'shares-feed':true
  })

  return (
    <div className={feedClasses}>
      <ArticleList />
    </div>
  );
};

export default SharesFeed
