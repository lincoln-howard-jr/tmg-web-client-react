import React, { useState } from "react";
import BioEditor from "./BioEditor";
import BioDetails from "./BioDetails";

//add click handler to change content to Bio Editor
const HeaderContent = () => {
  return (
    <div>
      <BioEditor />
      <BioDetails />
      <button>Edit</button>
    </div>
  );
};

export default HeaderContent;
