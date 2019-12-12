import React, { useRef } from "react";
import CommentList from "../comments/CommentList";
import { useApp } from "../../AppProvider";

const Article = props => {
  const sumref = useRef();
  const {
    article: {
      _id,
      title,
      author,
      publishedDate: { day, month, year },
      user: { username },
      summary,
      tags
    }
  } = props;
  const { share } = useApp().useComments("articles", _id);
  // debugger
  const onClick = () => {
    share(sumref.current.value);
  };
  return (
    <div>
      <h3>{title}</h3>
      <h4>By: {author}</h4>
      <h6>
        Published on: {month + 1}/{day}/{year}
      </h6>
      <hr />
      <h6>Shared by: {username}</h6>
      <p>
        <b>Summary:</b> {summary}
      </p>
      <p>
        <b>Tags:</b> {tags.join(", ")}
      </p>
      <input ref={sumref} placeholder="summary" />
      <button onClick={onClick}>Share!</button>
      <CommentList rootType="articles" rootId={_id} />
    </div>
  );
};

export default Article;
