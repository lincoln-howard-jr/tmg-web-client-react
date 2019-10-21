import {useState} from 'react';
let base = 'http://localhost:8000';

// articles hook
export default function ArticlesHook () {
  const [articles, setArticles] = useState ([]);
  const [singleArticle, setSingleArticle] = useState ({});
  const [articleErr, setErr] = useState (null);

  // get all articles
  const getArticles = async () => {
    try {
      let response = await fetch (`${base}/api/articles`);
      let data = await response.json ();
      setArticles (data);
    } catch (e) {
      setErr (e);
    }
  }

  // share an article
  const shareArticle = async (obj) => {
    try {
      
    } catch (e){

    }
  }

}