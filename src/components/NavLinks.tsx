import React, { useState } from "react";
import { A, usePath } from "hookrouter";
import { Shop } from "./Shop";

export const NavLinks = () => {

  const [linkVisible, setLinkVisible] = useState(false);

  const toggleLink = () => {
    setLinkVisible(!linkVisible);
  };

const path = usePath();

  return (
    <nav className="nav-links">
        <A href="/" >
          <button className={(path === "/") ?"redColor":"blackColor"}>Home</button>
        </A>
         <A href="/about">
        <button className={(path === "/about") ?"redColor":"blackColor"}>About</button>
        </A>
        <A href="/shop">
        <button onClick={toggleLink} className={(path === "/shop") ?"redColor":"blackColor"}>Shop</button></A>
        {linkVisible && <Shop/>}
    </nav>
  );
};

