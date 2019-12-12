import React from 'react'
import Article from './Article'
import { useApp } from "../../AppProvider";

function ArticleList() {
  const app = useApp();
  const { articles } = app.useArticles;
  return (
    <>
      {
        articles.map (article => <Article key={article._id} article={article} />)
      }
    </>
  );
}

export default ArticleList;
