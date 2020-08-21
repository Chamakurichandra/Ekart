import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
export default class Trimmer extends React.Component{
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
               <img  className="images" src="https://i.postimg.cc/90BSfMV5/trimmer.jpg" width="80%" height="500px" alt=""/>
               </div>
               <div>
                   <button onClick={this.changeState} type="button" className="btn btn-warning  text-white cart"><i className="fa fa-shopping-cart"></i>ADD TO CART</button>
                  <Link to="/CartDetails8">
                   <button type="button" className="btn btn-danger cart">BUY NOW</button>
                   </Link>
               </div>
            </div>
            <div className="col">
                <div className="product-details">
                <h5>Philips BT3211/15 Runtime: 60 min Trimmer for Men  (Green)</h5>
                <b className="rating">4.3<i className="fa fa-star"></i></b><span>rating</span>
                <h5> &#8377;1800/-<small className="strike"> &#8377;2000/-</small></h5>
                <h4>Available Offers</h4>
                <p>Bank Offers 5% Unlimited Cashback On Flipkart Axis Bank Credit Card <a href="#">T&C</a></p>
                <p>Bank Offers 10% Unlimited Cashback On Flipkart ICICI Bank Credit Card <a href="#">T&C</a></p>
                <p className="emi">No EMI With Cards</p>
                </div>
                <div>
                    <h5>Highlights</h5>
                    <ol>
                        <li>Blade Material: Stainless Steel</li>
                        <li>Trimming Range: 0.5 - 10 mm</li>
                        <li>60 min battery run time</li>
                        <li>20 length settings</li>
                        <li>Gender: Men</li>
                        <li>For Body Grooming</li>
                    </ol>
                </div>
                <div>
                    <button type="button" className="btn btn-warning brand">Philips</button>
                    <p>Brand Warranty of 1 Year Available For Trimmer and 6 Months for Accessories</p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )   
    }
};