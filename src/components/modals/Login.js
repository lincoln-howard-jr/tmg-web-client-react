import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
var classNames = require("classnames");

const Login = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;
  let divClasses = classNames({
    modal: modal
  });
  let closeBtnClasses = classNames({
    position: "fixed",
    top: 0,
    right: 0,
    background: "#fff",
    width: "2.5rem",
    height: "2.5rem",
    padding: 0,
    border: 0,
    cursor: "pointer",
    outline: 0,
    boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.2)"]
  });
  return (
    <div className={divClasses}>
      <p style={{ position: "absolute", left: "30%" }}>"Please Login"</p>
      <Form style={{ position: "absolute", top: "35%", left: "10%" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {modal && (
        <button className={closeBtnClasses}>
          <Link to="/" style={{ textDecoration: "none" }}>
            X
          </Link>
        </button>
      )}
    </div>
  );
};

export default Login;