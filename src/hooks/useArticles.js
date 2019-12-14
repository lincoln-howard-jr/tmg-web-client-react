import {useState, useEffect} from 'react';
import base from './baseUrl'

// articles hook
export default function ArticlesHook () {
  const [articles, setArticles] = useState ([]);
  const [singleArticle, setSingleArticle] = useState ({});
  const [articleErr, setErr] = useState (null);
  const controller = new AbortController ();
  const signal = controller.signal;
  
  // get all articles
  const getArticles = async (query) => {
    try {
      let response = await fetch (`${base}/api/articles`, {credentials: 'include', signal});
      let data = await response.json ();
      console.log(data)
      // debugger
      setArticles (data);
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  // share an article
  const shareArticle = async (obj) => {
    try {
      let response = await fetch (`${base}/api/articles`, {
        credentials: 'include',
        method: 'post',
        headers: new Headers ({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify (obj),
        signal
      });
    } catch (e) {
      if (!e.name || e.name !== 'AbortError')
        setErr (e);
    }
  }

  useEffect (() => {
    getArticles ();

    return () => controller.abort ();
  }, []);

  return {articles, getArticles, shareArticle}
}