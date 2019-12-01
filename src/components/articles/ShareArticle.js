import React from 'react'
import {useApp} from '../../AppProvider';

function ShareArticle() {
  const {articlesHook: {shareArticle}, useForm} = useApp ();
  const onSubmit = (validity, values) => {
    let obj = Object.assign (values, {
      publishedDate: {
        month: values.month,
        day: values.day,
        year: values.year,
      }
    });
    shareArticle (obj);
  }
  const {handleChange, handleSubmit} = useForm (onSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <div>Title: <input type="text" name="title" onChange={handleChange} /></div>
      <div>Author: <input type="text" name="author" onChange={handleChange} /></div>
      <div>Summary: <input type="text" name="summary" onChange={handleChange} /></div>
      <div>Url: <input type="text" name="url" onChange={handleChange} /></div>
      <div>Source: <input type="text" name="source" onChange={handleChange} /></div>
      <div>
        Publish Date:
        <input type="text" name="month" onChange={handleChange} /> /
        <input type="text" name="day" onChange={handleChange} /> / 
        <input type="text" name="year" onChange={handleChange} />
      </div>
      <input type="submit" />
    </form>
  )
}

export default ShareArticle
