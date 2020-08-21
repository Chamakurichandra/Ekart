import React from 'react';
import {Link} from "react-router-dom";
export default class Cards extends React.Component{
    render(){
        return(
            <div>
                  <div className="card-deck">
            <div className="card">
                <div className="card-body">
              <div>
                <Link to="/Tv">
                  <img className="images" src="https://i.postimg.cc/d3mMT62f/TV-1.jpg" width="100%" height="150px" alt=""/>
                  </Link>
              </div>
              
                </div>
                <div className="card-footer">
                    <div>
                    <h5>Modern TV's</h5>
                  </div>
                  <div>
                  &#8377;28000/-
                  </div>
                  <div>
                      Samsung TV
                  </div>
                </div>
            </div>
        <div className="card">
            <div className="card-body">
                <div>
                  <Link to="/Trimmer">
                    <img className="images" src="https://i.postimg.cc/90BSfMV5/trimmer.jpg" width="100%" height="150px" alt=""/>
                    </Link>
                </div>
                
                  </div>
                  <div className="card-footer">
                      <div>
                      <h5> Trimmers</h5>
                    </div>
                    <div>
                       &#8377;1800/-
                    </div>
                    <div>
                        Philips Trimmer
                    </div>
                  </div>
              </div>
              <div className="card">
                <div className="card-body">
                    <div>
                      <Link to="/AirCooler">
                        <img className="images" src="https://i.postimg.cc/vTXqsNLG/ac.jpg" width="100%" height="150px" alt=""/>
                        </Link>
                    </div>
                    
                      </div>
                      <div className="card-footer">
                          <div>
                          <h5> Air Cooler</h5>
                        </div>
                        <div>
                          &#8377;17000/-
                        </div>
                        <div>
                          Samsung AC
                        </div>
                      </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                        <div>
                          <Link to="/Kits">
                            <img className="images" src="https://i.postimg.cc/KYX5dbSn/babykit.jpg" width="100%" height="150px" alt=""/>
                            </Link>
                        </div>
                        
                          </div>
                          <div className="card-footer">
                              <div>
                              <h5>Baby Kits</h5>
                            </div>
                            <div>
                               &#8377;300/-
                            </div>
                            <div>
                                Baby Kits
                            </div>
                          </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                            <div>
                              <Link to="/Headphones">
                                <img className="images" src="https://i.postimg.cc/RVNQhhv7/headphone.jpg" width="100%" height="150px" alt=""/>
                                </Link>
                            </div>
                            
                              </div>
                              <div className="card-footer">
                                  <div>
                                  <h5>HeadPhones</h5>
                                </div>
                                <div>
                                 &#8377;1000/-
                                </div>
                                <div>
                                    MI Headphones
                                </div>
                              </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                                <div>
                                  <Link to="/Shoes">
                                    <img className="images" src="https://i.postimg.cc/c4pYJc9W/shoe.jpg" width="100%" height="150px" alt=""/>
                                    </Link>
                                </div>
                                
                                  </div>
                                  <div className="card-footer">
                                      <div>
                                      <h5>Shoes</h5>
                                    </div>
                                    <div>
                                     &#8377;2500/-
                                    </div>
                                    <div>
                                     Puma Shoes 
                                    </div>
                                  </div>
                              </div>
        </div>
        </div>
            
        )
    }
};