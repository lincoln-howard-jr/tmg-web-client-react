import React from 'react'
import headerImage from './header.png'
import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const NavBar = () => {
const history = useHistory()
const handleClick = () => {
    history.push('/')
}
    return (
        <div style={{height:'60px', width:'60px', border:'solid 2px red'}}>
           <img onClick={handleClick} src={headerImage} style={{width:'60px', height:'60px'}}/>
           <NavLink to='logout' />
        </div>
    )
}

export default NavBar
