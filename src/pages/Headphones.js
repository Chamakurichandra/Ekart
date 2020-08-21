import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
export default class Headphones extends React.Component{
    constructor(){
        super();
        this.state={
             x:null
        }
    };
        changeState=()=>{

            this.setState({
            
                x:this.state.x+1
               
            })
            console.log("added")
        };
    render(){
        return(
            <div>
            <Header sub = {this.state.x} />
        <div className="same-all">
            <div className="row">
            <div className="col">
               <div>
               <img  className="images" src="https://i.postimg.cc/RVNQhhv7/headphone.jpg" width="80%" height="500px" alt=""/>
               </div>
               <div>
                   <button onClick={this.changeState} type="button" className="btn btn-warning  text-white cart"><i className="fa fa-shopping-cart"></i>ADD TO CART</button>
                   <Link to="/CartDetails11">
                   <button type="button" className="btn btn-danger cart">BUY NOW</button>
                   </Link>
               </div>
            </div>
            <div className="col">
                <div className="product-details">
                <h5>boAt Rockerz 450 Bluetooth Headset  (Luscious Black, Wireless over the head)</h5>
                <b className="rating">4.1<i className="fa fa-star"></i></b><span>rating</span>
                <h5> &#8377;1000/-<small className="strike"> &#8377;1200/-</small></h5>
                <h4>Available Offers</h4>
                <p>Bank Offers 5% Unlimited Cashback On Flipkart Axis Bank Credit Card <a href="#">T&C</a></p>
                <p>Bank Offers 10% Unlimited Cashback On Flipkart ICICI Bank Credit Card <a href="#">T&C</a></p>
                <p className="emi"> No EMI  With Cards</p>
                </div>
                <div>
                    <h5>Highlights</h5>
                    <ol>
                        <li>With Mic:Yes</li>
                        <li>Connector type: 3.5 mm</li>
                        <li>40mm Drivers: HD Sound</li>
                        <li>Adjustable Earcups</li>
                        <li>Up to 8H Playback</li>
                        <li>Lightweight Design</li>
                        <li>Dual Modes: Bluetooth & AUX</li>
                    </ol>
                </div>
                <div>
                    <button type="button" className="btn btn-warning brand">mi</button>
                    <p>Brand Warranty of 6 Months Available For Headphones</p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )   
    }
};