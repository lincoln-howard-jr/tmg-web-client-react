import React from "react";
import CommentList from "../comments/CommentList";
import { propTypes } from "prop-types";

const Article = props => {
  const { article: { _id, articleMetadata: { title, author, datePublished: {day, month, year}} ,  user:{username},  userInterpretation:{summary, tags} } } = props;
  return (
    <div>
      <h3>{title}</h3>
      <h4>By: {author}</h4>
      <h6>
        Published on: {month + 1}/
        {day}/
        {year}
      </h6>
      <hr />
      <h6>Shared by: {username}</h6>
      <p>
        <b>Summary:</b> {summary}
      </p>
      <p>
        <b>Tags:</b> {tags.join(", ")}
      </p>
      <CommentList rootType={"comment"} root_id={_id} />
    </div>
  );
};

Article.propTypes = {
  article: propTypes
}

export default Article;


