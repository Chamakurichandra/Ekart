import React from 'react';
import "./Footer.css";
export default class Footer extends React.Component{
    render(){
        return(
            <div className="comman-Footer">
            <div className="footer">
            <div className="row">
            <div className="col">
            <dl>
            <dd><h5>ABOUT</h5></dd>
            <dd>Contact Us</dd>
            <dd>About Us</dd>
            <dd>Carrers</dd>
            <dd>Press</dd>
        </dl>
            </div>
            <div className="col">
            <dl>
            <dd><h5>HELP</h5></dd>
            <dd>Payments</dd>
            <dd>Shipping</dd>
            <dd>FAQ</dd>
            <dd>Cancelation&Return</dd>
        </dl>
            </div>
            <div className="col">
            <dl>
            <dd><h5>SOCIAL</h5></dd>
            <dd>Facebook</dd>
            <dd>Youtube</dd>
            <dd>Twitter</dd>
        </dl>
            </div>
            <div className="col">
            <dl>
            <dd><h5>POLICY</h5></dd>
            <dd>Return Policy</dd>
            <dd>Terms of use</dd>
            <dd>Security</dd>
            <dd>Privacy</dd>
        </dl>
            </div>
            <div className="col">
            <dl>
              <dd><h5>Register Office Address</h5></dd>
              <dd>Chandu Online Shopping Pvt.Ltd</dd>
               <dd>Main Road,Kanigiri,
               AndhraPradesh,523111,India
               </dd>
               <dd>Ph:6363579309</dd>
        </dl>
            </div>
            </div>
            <hr></hr>
            <b>&copy;2019-2020 Chandu.com</b>
            </div>
           
            </div>
        )
    }
}