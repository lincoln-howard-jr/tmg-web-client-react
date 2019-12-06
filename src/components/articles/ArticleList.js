import React from "react";
import Article from "./Article";
import ShareArticle from "./ShareArticle";
import { useApp } from "../../AppProvider";

function ArticleList() {
  const {
    articles
  } = useApp().useArticles;
  return (
    <>
      {articles.map(article => (
        <Article key={article._id} article={article} />
      ))}
      <ShareArticle />
    </>
  );
}

export default ArticleList;
