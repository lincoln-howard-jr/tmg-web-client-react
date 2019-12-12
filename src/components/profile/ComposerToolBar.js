import React from 'react'
import styles from './Profile'
import AddArticle from '../modals/AddArticle'
import AddVideo from '../modals/AddVideo'
import AddTags from '../modals/AddTags'
import useForm from "../../hooks/useForm";

const ComposerToolBar = () => {
    const onSubmit = e => {
    };
    const { handleChange, values } = useForm(onSubmit);

    return (
        <div className="share-composer-toolbar-grid-container">
           <AddArticle/>
           <AddVideo/>
           <AddTags/>
           <div>
           <button  type="submit" onClick={onSubmit}>
          Share Article
        </button>
        </div>

        </div>
    )
}

export default ComposerToolBar
