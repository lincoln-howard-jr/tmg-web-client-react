import React, { useRef } from "react";
import CommentList from "../comments/CommentList";
import { useApp } from "../../AppProvider";

const Article = ({article}) => {
  const sumref = useRef();;
  const { share } = useApp().useComments("articles", article._id);
  // debugger
  const onClick = () => {
    share(sumref.current.value);
  };
  return (
    <div>
      <h3>{article.articleMetadata.title}</h3>
      <h4>By: {article.articleMetadata.author}</h4>
      <h6>
        Published on:
        {article.articleMetadata.datePublished.month + 1}
        /{article.articleMetadata.datePublished.day}
        /{article.articleMetadata.datePublished.year}
      </h6>
      <hr />
      <h6>Shared by: {article.user.username}</h6>
      <p>
        <b>Summary:</b> {article.userInterpretation.summary}
      </p>
      <p>
        <b>Tags:</b> {article.userInterpretation.tags && article.userInterpretation.tags.join(", ")}
      </p>
      <input ref={sumref} placeholder="summary" />
      <button onClick={onClick}>Share!</button>
      <CommentList rootType="articles" rootId={article._id} />
    </div>
  );
};

export default Article;
