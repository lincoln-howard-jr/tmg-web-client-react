import {useState} from 'react';

const defaultOnSubmit = (validity, values) => console.log (validity, values);

// hooks for forms, returns form values, validity, and event handlers
export default function useForm (onSubmit=defaultOnSubmit, validationSchema={}) {
  const [values, setValues] = useState({});
  const [validity, setValidity] = useState ({});

  // on form submit call on provided submit method
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      onSubmit (validity, values);
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

  return {
    handleChange,
    handleSubmit,
    values,
    validity
  }
}