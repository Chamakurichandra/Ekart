import React from 'react';
import "./Header.css";
export default class Header extends React.Component{
                    fun_one=()=>{
                        if(this.refs.login.length===10){
                            alert("Login Success");
                          
                        }else{
                            alert("You Entered Wrong Number");
                        }
                    }

    render(){
        return(
            <div className="container1">
                <div className="row">
                <div className="col-1">
                    <img className="header-logo" src="https://i.postimg.cc/MHXnzFWK/logo.jpg" alt=""/>
                </div>
                <div className="col-4">
                <h2 className="header-title">Chandu Online Shopping</h2>
                </div>
                <div className="col-4">
                <input type="text" className="header-inputbox" placeholder="Search for Products"/>
                <i className="fa fa-search"></i>
                </div>
                <div className="col-2 ">
                    <div className="dropdown">
                 <a href="#" data-toggle="dropdown"><button type="submit" className="btn btn-primary" id="login-button">Reg/Login </button></a>
                <div className="dropdown-menu ">
                <a href="#" className="dropdown-item">
                    
                    <div>
                    <button type="button" className="close">X</button>
                    </div>
                    <div>
                        <h2>Register With Mobile</h2>
                        </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div>
                        <label>Enter Mobile Number</label>
                    </div>
                    <div className="form-group">
                    <input type="number" className="form-control" ref="login"></input>
                    </div>
                    <div>
                    <p>By Continuing, you agree to Chandu's <a href="#">Terms of Use </a> and <a href="#">Privacy Policy</a></p>
                    </div>
                    <div>
                        <button onClick={this.fun_one} className="btn btn-primary btn btn-block">Login</button>
                    </div>
                    <div className="choose">
                        <a href="#">OR</a>
                    </div>
                    <div>
                        <button className="btn btn-warning btn btn-block">Register</button>
                    </div>
                </a>
                </div>
                </div>
                </div>
                <div className="col-1">
                  <span style={{color:"white"}}>{this.props.sub}</span>
                <i className="fa fa-cart-plus" id="cart"></i>
                </div>
                </div>
            </div>
        )

    }
}