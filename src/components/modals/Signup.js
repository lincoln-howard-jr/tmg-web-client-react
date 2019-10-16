import React from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Signup ({ location }) {
  const {state = {} } = location;
  const {modal} = state
  return (
    <div className={modal ? "modal" : undefined}>
      {modal && <Link to="/">Close</Link>} 
        <p>"SIGNUP MODAL"</p>
    </div>
    );
}

export default withRouter(Signup)
