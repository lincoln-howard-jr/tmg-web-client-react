import React from "react";
import PropTypes from "prop-types";
import headerImage from './header.png';
import GuestNavBar from './GuestNavBar'
import UserNavBar from "./UserNavBar";
import useAuth from '../../hooks/useAuth'
import styles from './Header.css'
import classNames from 'classnames'

function Header({location}) {

  const imgClasses = classNames({
    'header-img':true
  })
  
  const {me} = useAuth()

  //If there's a user logged in , render the UserNavBar , if there's a Guest, render GuestNavBar
  
  return (
    <header>
      <img className={imgClasses} src={headerImage}></img>
      {me? <UserNavBar /> : <GuestNavBar /> }
    </header>
  );
}

Header.propTypes = {
  me: PropTypes.object.isRequired
};

export default Header;
