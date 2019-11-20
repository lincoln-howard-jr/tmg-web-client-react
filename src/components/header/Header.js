import React from "react";
import PropTypes from "prop-types";
import headerImage from './header.png';
import GuestNavBar from './GuestNavBar'
import UserNavBar from "./UserNavBar";
import Search from "../common/Search"
import useAuth from '../../hooks/useAuth'
import styles from './Header.css'
import classNames from 'classnames'

function Header() {

  const imgClasses = classNames({
    'header-img':true
    })
  
  const {me} = useAuth()
    
  return (
    <header>
      <Search/>
      {!me? <UserNavBar /> : <GuestNavBar /> }
    </header>
  );
}

Header.propTypes = {
  me: PropTypes.object.isRequired
};

export default Header;
