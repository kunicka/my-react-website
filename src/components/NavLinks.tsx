import React, { useState } from "react";
import { A, usePath } from "hookrouter";
import { Shop } from "./Shop";




export const NavLinks = () => {

  const [linkVisible, setLinkVisible] = useState(false);

  
//   useEffect(() => {
//       document.getElementById("l")?.style('color:"red"')
//       return () => {
//         document.getElementById("l")?.style('color:"black"')
//       }
//   }, [input])
  
//   const PathLabel = () => {
//     const path = usePath();
//     return path.;
// }

// const path = usePath();

// const className = `${path}` ? ".red" : ".black"

// const [color, setColor] = useState(".blue")


//   return (
//     <div>
//       <div>
//         <A href="/" style={activeLink}>Home</A>
//         <A href="/about" style={activeLink}>About</A>
//         <A href="/contact" style={activeLink}>Contact</A>
//       </div>
//       {routeResult || <NotFound />}
//     </div>
//   );
// }

const [openedHome, setOpenedHome] = useState(false);
const [openedAbout, setOpenedAbout] = useState(false);
const [openedShop, setOpenedShop] = useState(false);

const aboutButton =()=>{
    setLinkVisible(false);
    setOpenedShop(false);
    setOpenedHome(false);
    setOpenedAbout(true)
}
const homeButton =()=>{
    setLinkVisible(false);
    setOpenedShop(false);
    setOpenedAbout(false);
    setOpenedHome(true);
}
const shopButton =()=>{
    setOpenedAbout(false);
    setOpenedHome(false);
    setOpenedShop(true)
}

  const toggleLink = () => {
    setLinkVisible(!linkVisible);
    shopButton();
  };

  return (
    <nav className="nav-links">
        <A href="/" >
          <button onClick={homeButton} className={openedHome ? 'redColor' : 'blackColor'}>Home</button>
        </A>
        <A href="/about">
        <button onClick={aboutButton} className={openedAbout ? 'redColor' : 'blackColor'}>About</button>
        </A>
        <button onClick={toggleLink} className={openedShop ? 'redColor' : 'blackColor'}>Shop</button>
        {linkVisible && <Shop/>}
    </nav>
  );
};

