import React, {useState} from 'react'
import {NavLinks} from './NavLinks'

  
export const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav=()=>{
        setNavVisible(!navVisible)
    }
    return (
        <div className="nav-component">
            <h3 onClick={toggleNav}>Click to see the Nav Page</h3>
            {navVisible && <NavLinks/>}
            
        </div>
    )
}
