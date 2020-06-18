import React, {useState} from 'react'
import {A} from 'hookrouter'
import {Shop} from './Shop'

export const NavLinks = () => {
    const [linkVisible, setLinkVisible] = useState(false);

    const toggleLink=()=>{
        setLinkVisible(!linkVisible)}
        
    return (
        
            <nav className="nav-links">
                
                   <A href="/"><button>Home</button></A> 
                   <A href="/about"><button>About</button></A> 
                   <A href="/about"><button>About</button></A> 
                   <A href="/about"><button>About</button></A> 
                   <button onClick={toggleLink}>Shop</button>
                   {linkVisible && <Shop/>}
               
            </nav>
        
    )
}

