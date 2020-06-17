import React from 'react'
import {A} from "hookrouter"

  
export const Shop = () => {
    
    return (
        <ul>
            <A href="/Product1"><li>Product1</li></A>
            <A href="/Product2"><li>Product2</li></A>
            <A href="/Product3"><li>Product3</li></A>
        </ul>
    )
}
