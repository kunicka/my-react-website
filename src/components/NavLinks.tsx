import React, {useState} from 'react'
import {A} from 'hookrouter'
import {Shop} from './Shop'

export const NavLinks = () => {
    const [linkVisible, setLinkVisible] = useState(false);

    const toggleLink=()=>{
        setLinkVisible(!linkVisible)}
    return (
        
            <nav>
                <ul className="nav-links">
                   <A href="/"><li>Home</li></A> 
                   <A href="/about"><li>About</li></A> 
                   <li onClick={toggleLink}>Shop</li>
                   {linkVisible && <Shop/>}
                   {/* <A href="/shop"><li>Shop</li></A> 
                   <A href="/shop"><li>Shop</li></A>  */}
                    
                </ul>
            </nav>
        
    )
}

