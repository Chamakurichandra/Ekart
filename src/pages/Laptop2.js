import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
export default class Laptop2 extends React.Component{
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
               <img className="images" src="https://i.postimg.cc/CKQwFc7H/laptop1.jpg" width="80%" height="500px" alt=""/>
               </div>
               <div>
                   <button onClick={this.changeState} type="button" className="btn btn-warning text-white cart"><i className="fa fa-shopping-cart"></i>ADD TO CART</button>
                  <Link to="/CartDetails5">
                   <button type="button" className="btn btn-danger cart">BUY NOW</button>
                   </Link>
               </div>
            </div>
            <div className="col">
                <div className="product-details">
                <h5>HP 14q Core i3 8th Gen -(8GB/500GB SSD/Windows 10 Home) 14q-cs0029TU Thin and Light Laptop (14 inch,Black,1.47kg, With MS Office)</h5>
                <b className="rating">3.9<i className="fa fa-star"></i></b><span>rating</span>
                <h5> &#8377;38000/-<small className="strike"> &#8377;45000/-</small></h5>
                <h4>Available Offers</h4>
                <p>Bank Offers 5% Unlimited Cashback On Flipkart Axis Bank Credit Card <a href="#">T&C</a></p>
                <p>Bank Offers 10% Unlimited Cashback On Flipkart ICICI Bank Credit Card <a href="#">T&C</a></p>
                <p className="emi"> EMI Available With  Credit Cards</p>
                </div>
                <h5>Specifications</h5>
                    <ol>
                        <li>
                             <small>Sales Package</small>:
                                                           Laptop, Power Adaptor, User Guide, Warranty Documents</li>
                        <li><small>Model Number</small>:
                                                          Vostro 3491</li>
                        <li><small>Part Number</small>:
                                                          D552116WIN9BE</li>
                        <li><small>Series</small>:
                                                           Vostro</li>
                        <li><small>Color</small>:
                                                            Black</li>
                        <li><small>Type</small>:
                                                           Thin and Light Laptop</li>
                       
                    </ol>
                    <div>
                    <button type="button" className="btn btn-warning brand">HP</button>
                    <p>Brand Warranty of 1 Year Available For Laptop and 6 Months for Accessories</p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )   
    }
};