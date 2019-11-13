import React from "react";
import classNames from 'classnames'
import BioEditor from "./BioEditor";
import BioDetails from "./BioDetails";

//add click handler to change content to Bio Editor

let contentClasses = classNames({
  'header-content':true
})

const HeaderContent = () => {
  return (
    <div className={contentClasses}>
      <BioEditor />
      <BioDetails />
      <button>Edit</button>
    </div>
  );
};

export default HeaderContent;
