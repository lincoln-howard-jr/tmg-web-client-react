import React from 'react';
import Popup from 'reactjs-popup';
import {useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';

function Signup() {
  const history = useHistory ();
  const {me, authErr, signup} = useAuth ();
  if (me._id) history.push ('/me');
  const onSubmit = (validity, values) => {
    console.log (validity, values);
    signup (values);
  }
  const {err, handleChange, handleSubmit} = useForm (onSubmit, {});
  return (
    <Popup open={true}>
      {
        !!err &&
        <span>{err.toString ()}</span>
      }
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="first" onChange={handleChange} />
        <br />
        <label>Last Name</label>
        <input type="text" name="last" onChange={handleChange} />
        <br />
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label>Phone Number</label>
        <input type="text" name="phone" onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </Popup>
  )
}

export default Signup
