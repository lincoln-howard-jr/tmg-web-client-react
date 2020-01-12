import React from "react";
import propTypes from "prop-types";

const SourceDetails = ({ source: { siteName, url, followingCount } }) => {
  return (
    <li>
      <h3>SourceDetails: {siteName}</h3>
      <h6>Website: {url}</h6>
      <h6>Followed By: {followingCount}</h6>
    </li>
  );
};

SourceDetails.propTypes = {
  source: propTypes
};

export default SourceDetails;
