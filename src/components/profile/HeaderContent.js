import React from "react";
import classNames from 'classnames'
import BioEditor from "./BioEditor";
import BioDetails from "./BioDetails";
import useAuth from "../../hooks/useAuth"
import {useParams} from 'react-router-dom';

const HeaderContent = () => {
  const {id} = useParams ();
  const {me} = useAuth()
  const isOwnProfile = id === me._id;

  let contentClasses = classNames({
    'header-content':true
  })
  return (
    <div className={contentClasses}>
      {isOwnProfile ? <> <BioEditor /> <button>Edit</button></>: <BioDetails /> 
      }
    
    </div>
  );
};

export default HeaderContent;
