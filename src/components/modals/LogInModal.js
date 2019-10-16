import React from 'react'
import {Link} from 'react-router-dom'
function LogInModal({ location }) {
  const {state = {} } = location;
  const {modal} = state
  return (
    <div className={modal ? "modal" : undefined}>
      {modal && <Link to="/">Close</Link>}
        <p>"LOGIN MODAL"</p>
    </div>
    );
}

export default LogInModal
