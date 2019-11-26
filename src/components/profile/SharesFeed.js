import React from "react";
import classNames from 'classnames'
import ArticleList from "../articles/ArticleList";

const SharesFeed = () => {
  const feedClasses = classNames({
    'profile-feed-container':true
  })

  return (
    <div className={feedClasses}>
      <ArticleList/>
    </div>
  );
};

export default SharesFeed
