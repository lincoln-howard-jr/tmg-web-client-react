import React from "react";
import Popup from "reactjs-popup";
import { useHistory } from "react-router-dom";
import { useApp } from "../../AppProvider";

function Login(props) {
  const app = useApp();
  const { useForm } = app;

  const history = useHistory();
  const { me, login } = app.useAuth;

  const validator = {
    password: value => {
      return value.length > 7;
    }
  };

  const onSubmit = async (validity, values) => {
    await login(values);
    history.push("/");
  };

  const { err, handleChange, handleSubmit } = useForm(onSubmit);
  return (
    <Popup trigger={<button>Login</button>} modal={true}>
      <span>{err && err.toString()}</span>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="text" name="password" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Popup>
  );
}

export default Login;
