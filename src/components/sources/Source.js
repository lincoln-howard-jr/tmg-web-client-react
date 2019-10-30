import React from "react";
import propTypes from 'prop-types'

//Reccos for property name changes: (a) chg followingCount to followerCount for source obj. (1) Chg siteName to "SourceName" to avoid confusion with the "url" while aligning better with UI (See: "Source: {siteName} in Source.js)

const Source = props => {
  const { source: { siteName, url, followingCount } } = props;

  return (
    <div>
      <h3>Source: {siteName}</h3>
      <h6>Website: {url}</h6>
      <h6>Followed By: {followingCount}</h6>
    </div>
  );
};

Source.propTypes = {
    source: propTypes
}

export default Source;

