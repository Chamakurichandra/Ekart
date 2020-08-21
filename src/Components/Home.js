import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="card-deck">
                    <div className="card">
                    <div className="card-body">
                    <div>
                      <Link to="/Boys">
                    <img className="images" src="https://i.postimg.cc/9XByJTQt/boy.jpg" width="100%" height="150px" alt=""/>
                    </Link>
                    </div>
                    </div>
                    <div className="card-footer">
                      <div>
                        <h5> Dress For Kids</h5>
                        </div>
                        <div>
                        &#8377;2000/-
                        </div>
                        <div>
                        Shirts&Pants
                        </div>
                    </div>
                   
                    </div>
     <div className="card">
        <div className="card-body">
        <div>
          <Link to="/BabyKits">
            <img className="images" src="https://i.postimg.cc/2yjbPcSd/Childrens.jpg" width="100%" height="150px" alt=""/>
            </Link>
        </div>
        
          </div>
          <div className="card-footer">
              <div>
              <h5> Dress for Babies </h5>
            </div>
            <div>
              &#8377;2500/-
            </div>
            <div>
                Gowns
            </div>
          </div>
      </div>
      <div className="card">
        <div className="card-body">
            <div>
              <Link to="/Mens">
                <img className="images" src="https://i.postimg.cc/SNJjCz2K/men.jpg" width="100%" height="150px" alt=""/>
                </Link>
            </div>
              </div>
              <div className="card-footer">
                  <div>
                  <h5> Dress For Mens</h5>
                </div>
                <div>
                 &#8377;1000/-
                </div>
                <div>
                    Shirts
                </div>
              </div>
          </div>
          <div className="card">
            <div className="card-body">
                <div>
                  <Link to="/Laptop1">
                    <img className="images" src="https://i.postimg.cc/gkFkXBWg/laptop2.jpg" width="100%" height="150px" alt=""/>
                    </Link>
                </div>
                
                  </div>
                  <div className="card-footer">
                      <div>
                      <h5>Loptop</h5>
                    </div>
                    <div>
                      &#8377;45000/-
                    </div>
                    <div>
                        Dell Laptop
                    </div>
                  </div>
              </div>
              <div className="card">
                <div className="card-body">
                    <div>
                      <Link to="/Laptop2">
                        <img className="images" src="https://i.postimg.cc/CKQwFc7H/laptop1.jpg" width="100%" height="150px" alt=""/>
                        </Link>
                    </div>
                    
                      </div>
                      <div className="card-footer">
                          <div>
                          <h5>Laptop</h5>
                        </div>
                        <div>
                         &#8377;38000/-
                        </div>
                        <div>
                            HP Laptop
                        </div>
                      </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                        <div>
                          <Link to="/Mobiles">
                            <img  className="images" src="https://i.postimg.cc/6p6Knk1f/realme.jpg" width="100%" height="150px" alt=""/>
                            </Link>
                        </div>
                        
                          </div>
                          <div className="card-footer">
                              <div>
                              <h5>Mobile</h5>
                            </div>
                            <div>
                              &#8377;9900/-
                            </div>
                            <div>
                              Realme 3 pro (4GB,64GB)
                            </div>
                          </div>
                      </div>
                      <div>
        </div>
        </div>
        </div>
       
        )
    }
};