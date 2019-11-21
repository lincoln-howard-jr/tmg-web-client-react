import React from "react";
import PropTypes from "prop-types";
import headerImage from './header.png';
import GuestNavBar from './GuestNavBar'
import UserNavBar from "./UserNavBar";
import Search from "./Search"
import useAuth from '../../hooks/useAuth'
import styles from './Header.css'

function Header() {
  const {me} = useAuth()

  return (
    <header className={'main-header'}>
      {!me? <div className={'container'}><img src={headerImage} /><Search/><UserNavBar /></div> : <div className={'container'}><img src={headerImage} /><Search/><GuestNavBar /> </div> }
    </header>
  );
}

Header.propTypes = {
  me: PropTypes.object.isRequired
};

export default Header;
