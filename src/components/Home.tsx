import React from "react";
import { A } from "hookrouter";
import { Page } from "./Page";

export const Home = () => {
  const bestsellerLink = <A href="./Product1">Click to see our bestseller!</A>;
//   const [color, setColor] = useState(".black");
//   const [state, setState] = useState(false);

//   const changeState = ()=> {
//       setState(true)
//   }

//   useEffect(() => {
//     setColor(".red");
//     return () => {
//       setColor(".black");
//       setState(false)
//     };
//   }, []);


  return (
    <div className="page-container">
      <Page
        title="Welcome to the home page of this page."
        children={bestsellerLink}
      />
    </div>
  );
};
