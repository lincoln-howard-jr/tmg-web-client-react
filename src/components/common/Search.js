import React from 'react'
import styles from './Search.css'

const Search = () => {
    const hideIcon = (self) => {
        console.log(self)
    }
    return (
        <span>
        <label name="search-text" >
        <input type="text" name="search-text" id="search" placeholder="Search" value="" />
        </label><img style={{height:'50px', width:'50px'}}src="https://img.icons8.com/plasticine/100/000000/search.png"/>
        </span>
    )
}

export default Search
