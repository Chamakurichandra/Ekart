import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import "./Boys.css";
export default class Boys extends React.Component{
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
                 <img className="images" src="https://i.postimg.cc/9XByJTQt/boy.jpg" width="80%" height="500px" alt=""/>
               </div>
               <div>
                   <button onClick={this.changeState} type="button" className="btn btn-warning text-white cart"><i className="fa fa-shopping-cart"></i>ADD TO CARD</button>
                   <Link to="/CartDetails">
                   <button type="button" className="btn btn-danger cart">BUY NOW</button>
                   </Link>
               </div>
            </div>
            <div className="col">
                <div className="product-details">
                <h5>Boys Casual Shirts and Paints(Blue)</h5>
                <b className="rating">4.2<i className="fa fa-star"></i></b><span>rating</span>
                <h5> &#8377;2000/-<small className="strike"> &#8377;2800/-</small></h5>
                <h4>Available Offers</h4>
                <p>Bank Offers 5% Unlimited Cashback On Flipkart Axis Bank Credit Card <a href="#">T&C</a></p>
                 <p>Bank Offers 10% Unlimited Cashback On Flipkart ICICI Bank Credit    Card<a href="#">T&C</a></p>
                 <p className="emi">No EMI With Cards</p>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )   
    }
};