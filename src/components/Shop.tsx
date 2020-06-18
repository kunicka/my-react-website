import React from 'react'
import {A} from "hookrouter"

  
export const Shop = () => {
    
    return (
        <div className="product-buttons">
            <A href="/product1"><button>Product1</button></A>
            <A href="/product2"><button>Product2</button></A>
            <A href="/product3"><button>Product3</button></A>
        </div>
    )
}
