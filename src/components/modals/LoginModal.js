import React from 'react'
import Popup from 'reactjs-popup'
import {useHistory} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';

function LoginModal () {
  const history = useHistory ();
  const {me, login} = useAuth ();
  if (me._id) history.push ('/');
  
  const validator = {
    password: (value) => {
      return value.length > 7;
    }
  }

  const onSubmit = async (validity, values) => {
    console.log (validity, values);
    await login (values);
    history.push ('/');
  }
  let {err, handleChange, handleSubmit} = useForm (validator, onSubmit);
  return (
    <Popup open={true}>
      <span>{err}</span>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </Popup>
  )
}

export default LoginModal