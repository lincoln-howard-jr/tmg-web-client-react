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
    let value = event.target.value;
    let name = event.target.name;
    if (validationSchema [name]) {
      let isValid = validationSchema [name] (value);
      setValidity (validity => {return { ...validity, [name]: isValid }});
      event.target.setCustomValidity ((isValid ? 'Is invalid' : ''));
    }
    setValues(values => {return { ...values, [name]: value }});
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