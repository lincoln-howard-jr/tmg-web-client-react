import React from "react";
import {useApp} from '../../AppProvider'

export default function GuestNavBar () {

  const {login} = useApp ();
  const onClick = async () => {
    try {
      await login ();
      console.log ('success');
    } catch (e) {
      console.log (e);
    }
  }
  return (
      <nav>
        <h6>Already have an account?</h6>
        <button onClick={onClick}>Login</button>
      </nav>
  );
};
