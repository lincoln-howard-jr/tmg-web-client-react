import React from "react";
import propTypes from "prop-types";
import CommentList from "../comments/CommentList";

const Source = props => {
  const { source: { siteName, url, followingCount } } = props;

  return (
    <div>
      <h3>Source: {siteName}</h3>
      <h6>Website: {url}</h6>
      <h6>Followed By: {followingCount}</h6>
      <CommentList />
    </div>
  );
};

Source.propTypes = {
  source: propTypes
};

export default Source;
