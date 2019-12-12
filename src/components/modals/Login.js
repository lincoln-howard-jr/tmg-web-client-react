import React from "react";
import {useApp} from "../../AppProvider";

function Login({onDone}) {
  const { useAuth: {me, login}, useForm } = useApp ();

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
      <span>{err && err.toString ()}</span>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="text" name="password" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Login;
