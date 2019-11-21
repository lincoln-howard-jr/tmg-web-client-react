import React from 'react'
import Popup from 'reactjs-popup'
import {useHistory} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';

function Login () {
  const history = useHistory ();
  const {me, login} = useAuth ();
  if (me._id) history.push ('/');
  
  const validator = {
    password: (value) => {
      return value.length > 7;
    }
  }
  
  const onSubmit = async (validity, values) => {
    await login (values);
    history.push ('/');
    }
  
    const {err, handleChange, handleSubmit} = useForm (validator, onSubmit);
  return (
    <Popup trigger={<button>Login</button>}>
      <span>{err}</span>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="text" name="password" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit"/>
      </form>
    </Popup>
  )
}

export default Login