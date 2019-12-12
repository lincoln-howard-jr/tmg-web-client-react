import React from 'react'
import styles from './Profile'
import AppProvider from '../../AppProvider'

const ComposerToolBar = () => {

const app = AppProvider()

const {share} = app.useComments("")



    return (
        <div className="share-composer-toolbar-container-flex">
           <button>+ Article</button> 
           <button>+ Video</button> 
           <button>+ Tags</button> 
        </div>
    )
}

export default ComposerToolBar
