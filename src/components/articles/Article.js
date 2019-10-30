import React from "react";
import CommentList from "../comments/CommentList";
import { propTypes } from "prop-types";

const Article = props => {
    console.log(props.article)
    debugger
  const { article: { _id, articleMetadata: { title, author, datePublished} ,  user,  userInterpretation } } = props;
  return (
    <div>
      <h3>{title}</h3>
      <h4>By: {author}</h4>
      <h6>
        Published on: {datePublished.month + 1}/
        {datePublished.day}/
        {datePublished.year}
      </h6>
      <hr />
      <h6>Shared by: {user.username}</h6>
      <p>
        <b>Summary:</b> {userInterpretation.summary}
      </p>
      <p>
        <b>Tags:</b> {userInterpretation.tags.join(", ")}
      </p>
      <CommentList rootType={"source"} root_id={_id} />
    </div>
  );
};

Article.propTypes = {
  article: propTypes
}

export default Article;


