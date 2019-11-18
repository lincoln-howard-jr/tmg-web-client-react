import { useState } from 'react';

const defaultOnSubmit = (validity, values) => console.log (validity, values);

// hooks for forms, returns form values, validity, and event handlers
export default function useForm (onSubmit=defaultOnSubmit, validationSchema={}) {
  const [values, setValues] = useState({});
  const [validity, setValidity] = useState ({});
  const [err, setErr] = useState (null);

  // on form submit call on provided submit method
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      onSubmit (validity, values);
    } catch (e) {
      setErr (e);
    }
  };

  // handle input change and validation update
  const handleChange = (event) => {
    event.persist();
    if (validationSchema [event.target.name]) {
      let isValid = validationSchema [event.target.name] (event.target.value);
      setValidity (validity => {return { ...validity, [event.target.name]: isValid }});
      event.target.setCustomValidity ((isValid ? 'Is invalid' : ''));
    }
    setValues(values => {return { ...values, [event.target.name]: event.target.value }});
  };

  const clearErr = async () => {
    setErr (null);
  }

  return {
    handleChange,
    handleSubmit,
    values,
    validity,
    err,
    clearErr
  }
}