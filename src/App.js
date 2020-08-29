import React from 'react';
import "./App.css";
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Banner from "./Components/Banner";
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Boys from "./pages/Boys";
import BabyKits from "./pages/BabyKits";
import Mens from "./pages/Mens";
import Laptop1 from "./pages/Laptop1";
import Laptop2 from "./pages/Laptop2";
import Mobiles from "./pages/Mobiles";
import Tv from "./pages/Tv";
import Trimmer from "./pages/Trimmer";
import AirCooler from "./pages/AirCooler";
import Kits from "./pages/Kits";
import Headphones from './pages/Headphones';
import Shoes from "./pages/Shoes";
import CartDetails from "./pages/CartDetails";
import CartDetails2 from "./pages/CartDetails2";
import CartDetails3 from "./pages/CartDetails3";
import CartDetails4 from "./pages/CartDetails4";
import CartDetails5 from "./pages/CartDetails5";
import CartDetails6 from "./pages/CartDetails6";
import CartDetails7 from "./pages/CartDetails7";
import CartDetails8 from "./pages/CartDetails8";
import CartDetails9 from "./pages/CartDetails9";
import CartDetails10 from "./pages/CartDetails10";
import CartDetails11 from "./pages/CartDetails11";
import CartDetails12 from "./pages/CartDetails12";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
export default class App extends React.Component{
  render(){
    return(
      <Router>
      <div>
<Switch>
  <Route path="/Boys">
<Boys/>
  </Route>
  <Route path="/BabyKits">
<BabyKits/>
  </Route>
  <Route path="/Mens">
<Mens/>
  </Route>
  <Route path="/Laptop1">
<Laptop1/>
  </Route>
  <Route path="/Laptop2">
<Laptop2/>
  </Route>
  <Route path="/Mobiles">
<Mobiles/>
  </Route>
  <Route path="/Tv">
<Tv/>
  </Route>
  <Route path="/Trimmer">
<Trimmer/>
  </Route>
  <Route path="/AirCooler">
<AirCooler/>
  </Route>
  <Route path="/Kits">
<Kits/>
  </Route>
  <Route path="/Headphones">
<Headphones/>
  </Route>
  <Route path="/Shoes">
    <Shoes/>
  </Route>
  <Route path="/CartDetails">
    <CartDetails/>
  </Route>
  <Route path="/CartDetails2">
    <CartDetails2/>
  </Route>
  <Route path="/CartDetails3">
    <CartDetails3/>
  </Route>
  <Route path="/CartDetails4">
    <CartDetails4/>
  </Route>
  <Route path="/CartDetails5">
    <CartDetails5/>
  </Route>
  <Route path="/CartDetails6">
    <CartDetails6/>
    </Route>
    <Route path="/CartDetails7">
    <CartDetails7/>
  </Route>
  <Route path="/CartDetails8">
    <CartDetails8/>
  </Route>
  <Route path="/CartDetails9">
    <CartDetails9/>
  </Route>
  <Route path="/CartDetails10">
    <CartDetails10/>
  </Route>
  <Route path="/CartDetails11">
    <CartDetails11/>
  </Route>
  <Route path="/CartDetails12">
    <CartDetails12/>
  </Route>
  <Route path="/">
<Header/>
<Navbar/>
<Banner/>
<Home/>
<Cards/>
<Footer/>
  </Route>
</Switch>
      </div>
      </Router>
    )
  }
};