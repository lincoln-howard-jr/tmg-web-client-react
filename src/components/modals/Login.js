import React from "react";
import {useApp} from "../../AppProvider";
import HeaderImage from '../profile/header.png'

function Login({onDone}) {
  const { useForm, useAuth: {login} } = useApp ();

  const validator = {
    password: value => {
      return value.length > 7;
    }
  };

  const onSubmit = async (validity, values) => {
    await login(values);
    onDone ();
  };

  const { err, handleChange, handleSubmit } = useForm(onSubmit);
  return (
    <>
      <img src={HeaderImage} />
      <h2 className="translate-y-minus-25">Log In</h2>
      <span>{err && err.toString ()}</span>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="text" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
