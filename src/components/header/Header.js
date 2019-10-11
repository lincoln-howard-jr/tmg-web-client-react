import React from 'react'
import PropTypes from 'prop-types';

function Header({me, useHistory}) {
  return (
    <header>
      <nav>

        <div></div>

        <div>
          <h1 id="title-text">The Metropolitan Global</h1>
        </div>

        <div>
          {
            me._id &&
            <span>Welcome, {me.first} {me.last}</span>
          }
          {
            !me._is &&
            <>
              <span>Log In</span>
              <span>Sign Up</span>
            </>
          }
        </div>

      </nav>
    </header>
  )
}

Header.propTypes = {
  me: PropTypes.object.isRequired,
  useHistory: PropTypes.func.isRequired
}

export default Header
