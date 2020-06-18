import React from "react";
import {About} from "./About";
import {Nav} from "./Nav";
import {Header} from "./Header";
import {Shop} from "./Shop";
import {Product1} from "./Product1"
import {Product2} from "./Product2"
import {Product3} from "./Product3"
import {useRoutes} from "hookrouter";
import {Home} from './Home'


const routes = {
  '/':() =><Home/>,
  '/about': () =><About/>,
  '/shop': () =><Shop/>,
  '/product1': () => <Product1/>,
  '/product2': () => <Product2/>,
  '/product3': () => <Product3/>,
}

export const AppRouter=()=>{
  // const [inProp, setInProp] = useState(false);
  const match = useRoutes(routes);
  return (
    <div>
      <Header />
      <div className="main-container">
      {/* <Transition className="enter-active"> */}
      <Nav />
      {match}
      {/* </Transition> */}
      </div>
    </div>
  );
};
