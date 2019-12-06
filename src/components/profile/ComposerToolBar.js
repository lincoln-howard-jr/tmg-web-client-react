import React from 'react'
import styles from './Profile'
import AddArticle from '../modals/AddArticle'
import AddVideo from '../modals/AddVideo'
import AddTags from '../modals/AddTags'

const ComposerToolBar = () => {
    return (
        <div className="share-composer-toolbar-container-flex">
           <AddArticle/>
           <AddVideo/>
           <AddTags/>
        </div>
    )
}

export default ComposerToolBar
