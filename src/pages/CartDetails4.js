import React from "react";
import "./CartDetails.css";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
export default class CartDetails4 extends React.Component{
    constructor(){
        super();
        this.state={
            data:1,
            price:45000
        }
    }
    Remove=()=>{
        this.setState({
            data:this.state.data-1,
            price:this.state.price-45000
        })
        };
     Add=()=>{
        this.setState({
            data:this.state.data+1,
            price:this.state.price+45000
        })
        };
    Order=()=>{
        window.confirm("Your Order is placing");
    }
    render(){
        return(
            <div>
                <Header/>
            <div className="card-deck">
            <div className="card">
            <div className="card-header address">
                <div className="row">
                    <div className="col">
                    <h2>My Cart</h2>
                    </div>
                    <div className="col">
                    <i className="fa fa-map-marker market"> <b>Delivery to</b></i>
                    </div>
                </div>
            </div>
            <div className="card-body">
            <div className="row">
            <div className="col-4">
            <div>
            <img className="images" src="https://i.postimg.cc/gkFkXBWg/laptop2.jpg" width="100%" height="100px" alt=""/>
            </div>
            <div>
                <button onClick={this.Remove} type="button" className="btn btn-secondary click1">-</button>
                 <button type="button" className="btn btn-secondary click2">{this.state.data}</button>
                <button onClick={this.Add} type="button" className="btn btn-secondary click3">+</button>
            </div>
            </div>
            <div className="col-4">
            <b>Dell Vostro Core i3 10th Gen-(4GB/1TB HDD/Windows 10 Home) Thin and LightLaptop(14 inch,Black,1.66kg, With MS Office)</b>
            <h5> &#8377;45000/-<small className="strike"> &#8377;52000/-</small></h5>

            </div>
            <div className="col-4">
            <b>Delivered By With in three Days</b>
            </div>
            </div>
            </div>
            <div className="card-footer">
            <button onClick={this.Order} type="button" className="btn btn-warning text-white placeOrder">Place Order</button>
            </div>

            </div>
            <div className="card">
            <div className="card-header address">
            <h2>PRICE DETAILS</h2>
            </div>
            <div className="card-body">
            <div className="row">
                <div className="col-6 payment">
                    <b>Price</b>
                </div>
                <div className="col-6 payment">
                 <b style={{float:"right"}}>  &#8377;{this.state.price}/-   </b>
                 </div>
                 <div className="col-6 payment ">
                    <b>Delivery Fee</b>
                 </div>
                 <div className="col-6 payment">
                    <b style={{color:"green",float:"right"}}> FREE</b>
                 </div>
            </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col">
                    <h2>Total Amount</h2>
                    </div>
                    <div className="col">
                  <b style={{float:"right"}}>  &#8377;{this.state.price}/- </b>
                   </div>
                </div>
            </div>
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
};