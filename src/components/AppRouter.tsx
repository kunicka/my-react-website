import React from "react";
import { About } from "./About";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Shop } from "./Shop";
import {Product1} from "./Product1"
import {Product2} from "./Product2"
import {Product3} from "./Product3"

import { useRoutes } from "hookrouter";
import {Home} from './Home'

const routes = {
  '/':() =><Home/>,
  '/about': () =><About/>,
  '/shop': () =><Shop/>,
  '/Product1': () => <Product1/>,
  '/Product2': () => <Product2/>,
  '/Product3': () => <Product3/>,
}

export const AppRouter=()=>{
  const match = useRoutes(routes);
  return (
    <div>
      <Header />
      <div className="main-container">
      <Nav />
      {match}
      </div>
    </div>
  );
};
