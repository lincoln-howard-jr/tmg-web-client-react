import React from 'react'
import styles from './Search.css'
import classNames from 'classnames'

const searchClasses = classNames({
    input:true
})

const Search = () => {
    return (
        <span>
        <label name="search-text">
        <input type="text" className={searchClasses} name="search-text" id="search" placeholder="             Search" value="" />
        </label><img style={{height:'50px', width:'50px'}}src="https://img.icons8.com/plasticine/100/000000/search.png"/>
        </span>
    )
}

export default Search
