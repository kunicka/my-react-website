import React, {useState} from 'react'
import {NavLinks} from './NavLinks'

  
export const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav=()=>{
        setNavVisible(!navVisible)
    }
    return (
        <div className="nav-container">
            <button className="navButton" onClick={toggleNav}>Menu</button>
            {navVisible && <NavLinks/>}
        </div>
    )
}
