import React, {useState} from 'react'
import {A} from "hookrouter"

  
export const Shop = () => {
    const [openedP1, setOpenedP1] = useState(false);
    const [openedP2, setOpenedP2] = useState(false);
    const [openedP3, setOpenedP3] = useState(false);

    const p1Button =()=>{
        setOpenedP1(true);
        setOpenedP2(false);
        setOpenedP3(false);
    }
    const p2Button =()=>{
        setOpenedP1(false);
        setOpenedP2(true);
        setOpenedP3(false);
    }
    const p3Button =()=>{
        setOpenedP1(false);
        setOpenedP2(false);
        setOpenedP3(true);
    }

    return (
        <div className="product-buttons">
            <A href="/product1"><button
            onClick={p1Button} className={openedP1 ? 'redColor' : 'blackColor'}>Product1</button></A>
            <A href="/product2"><button
            onClick={p2Button} className={openedP2 ? 'redColor' : 'blackColor'}>Product2</button></A>
            <A href="/product3"><button
            onClick={p3Button} className={openedP3 ? 'redColor' : 'blackColor'}>Product3</button></A>
        </div>
    )
}
