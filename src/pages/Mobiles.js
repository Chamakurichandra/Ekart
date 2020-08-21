import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
export default class Mobiles extends React.Component{
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
               <img  className="images" src="https://i.postimg.cc/6p6Knk1f/realme.jpg" width="80%" height="500px" alt=""/>
               </div>
               <div>
                   <button onClick={this.changeState} type="button" className="btn btn-warning text-white cart"><i className="fa fa-shopping-cart"></i>ADD TO CART</button>
                    <Link to="/CartDetails6">
                   <button type="button" className="btn btn-danger cart">BUY NOW</button>
                   </Link>
               </div>
            </div>
            <div className="col">
                <div className="product-details">
                <h5>Realme 3 Pro(Nitro Blue,64GB)(4 GB RAM)</h5>
                <b className="rating">4.5<i className="fa fa-star"></i></b><span>rating</span>
                <h5> &#8377;9900/-<small className="strike"> &#8377;14000/-</small></h5>
                <h4>Available Offers</h4>
                <p>Bank Offers 5% Unlimited Cashback On Flipkart Axis Bank Credit Card <a href="#">T&C</a></p>
                <p>Bank Offers 10% Unlimited Cashback On Flipkart ICICI Bank Credit Card <a href="#">T&C</a></p>
                <p className="emi"> EMI Available With Credit Cards</p>
                </div>
                <div>
                    <h5>Highlights</h5>
                    <ol>
                        <li>4GB RAM | 64GB ROM | Expandable Upto 256GB</li>
                        <li>6.0 cm (6.3 inch) Full HD+ Display</li>
                        <li>16MP + 5MP | 25MP Front Camera</li>
                        <li>4045 mAh Battery</li>
                        <li>Qualcomm Snapdragon 710 Octa Core 2.2 GHz AIE Processor</li>
                        <li>Dual Nano SIM Slot and Memory Card Slot</li>
                        <li>VOOC Flash Charge 3.0</li>
                    </ol>
                </div>
                <div>
                    <button type="button" className="btn btn-warning brand">realme</button>
                    <p>Brand Warranty of 1 Year Available For Mobile and 6 Months for Accessories</p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )   
    }
};