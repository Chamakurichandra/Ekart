import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
export default class AirCooler extends React.Component{
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
               <img  className="images" src="https://i.postimg.cc/vTXqsNLG/ac.jpg" width="80%" height="500px" alt=""/>
               </div>
               <div>
                   <button onClick={this.changeState} type="button" className="btn btn-warning cart"><i className="fa fa-shopping-cart"></i>ADD TO CART</button>
                   <Link to="/CartDetails9">
                   <button type="button" className="btn btn-danger cart">BUY NOW</button>
                   </Link>
               </div>
            </div>
            <div className="col">
                <div className="product-details">
                <h5>Samsung 1.5 Ton 5 Star Split Triple Inverter Dura Series AC - White  (AR18TV5HLTUNNA/AR18TV5HLTUXNA, Alloy Condenser)</h5>
                <b className="rating">4.3<i className="fa fa-star"></i></b><span>rating</span>
                <h5> &#8377;17000/-<small className="strike"> &#8377;18500/-</small></h5>
                <h4>Available Offers</h4>
                <p>Bank Offers 5% Unlimited Cashback On Flipkart Axis Bank Credit Card <a href="#">T&C</a></p>
                <p>Bank Offers 10% Unlimited Cashback On Flipkart ICICI Bank Credit Card <a href="#">T&C</a></p>
                <p className="emi"> EMI Available With Credit Cards</p>
                </div>
                <div>
                    <h5>Highlights</h5>
                    <ol>
                        <li>1.5 Ton : suitable for room size up to 150 sq ft</li>
                        <li>5 Star BEE Rating 2020 : For energy savings upto 25% (compared to Non-Inverter 1 Star)</li>
                        <li>Auto Restart: No need to manually reset the settings post power-cut</li>
                        <li>Alloy</li>
                    </ol>
                </div>
                <div>
                    <button type="button" className="btn btn-warning brand">samsung</button>
                    <p>Brand Warranty of 1 Year Available For Air Cooler</p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>  
    )   
    }
};