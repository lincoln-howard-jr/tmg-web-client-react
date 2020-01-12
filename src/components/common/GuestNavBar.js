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
        <button onClick={onClick}>Login</button>
        <button>Sign Up</button>
        <button>Terms of Service</button>
      </nav>
  );
};
