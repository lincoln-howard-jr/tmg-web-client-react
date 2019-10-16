import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Signup.css'

var classNames = require("classnames");

function Signup({ location }) {
  const { state = {} } = location;
  const { modal } = state;

  const divClasses = classNames({
    modal: modal
  })
  const closeBtnClasses = classNames({
    closeBtnClass: modal
  });
  return (
    <div className={divClasses}>
      <p style={{ position: "absolute", left: "30%" }}>"Please Signup"</p>
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
}
export default withRouter(Signup);
