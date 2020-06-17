import React, {useState} from 'react'
import {NavLinks} from './NavLinks'

  
export const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav=()=>{
        setNavVisible(!navVisible)
    }
    return (
        <div className="nav-container">
            <h3 onClick={toggleNav}>Menu</h3>
            {navVisible && <NavLinks/>}
            
        </div>
    )
}
