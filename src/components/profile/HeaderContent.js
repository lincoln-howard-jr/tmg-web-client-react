import React from "react";
import classNames from 'classnames'
import BioEditor from "../modals/BioEditor";
import BioDetails from "./BioDetails";
import FollowBtn from './FollowBtn'

const HeaderContent = ({canEdit, editing, editBio}) => {
  let contentClasses = classNames({
    'header-content':true
  })

  return (
    <div className={contentClasses}>
      {!!canEdit? <><BioDetails/>  <FollowBtn/></>  : 
      ( 
        editing? <> <BioDetails/> <button onClick={editBio}>Edit</button></> :
        <> <BioEditor/> <button onClick={editBio}>Cancel</button></>

         )
         }
    </div>
  );
};

export default HeaderContent;
