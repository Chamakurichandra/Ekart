import React from 'react';
export default class Banner extends React.Component{
    render(){
        return(
            <div>
               
<div>
<div className="carousel slide" data-ride="carousel" id="carouselDemo">
    <ol className="carousel-indicators">
        <li data-target="#carouselDemo" data-slide-to="0" className="active"></li>
        <li data-target="#carouselDemo" data-slide-to="1"></li>
        <li data-target="#carouselDemo" data-slide-to="2"></li>
        <li data-target="#carouselDemo" data-slide-to="3"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active" data-interval="3000">
            <img src="https://i.postimg.cc/pTJPMPm4/girl.jpg" className="d-block w-100 ban1 " height="300px" alt=""/>
        </div>
        <div className="carousel-item"data-interval="3000">
            <img src="https://i.postimg.cc/KYc63tjq/laptop.jpg" className="d-block w-100 ban1" height="300px" alt=""/>
        </div>
        <div class="carousel-item"data-interval="3000">
            <img src="https://i.postimg.cc/QMV6rmH3/banner-Mob.jpg" className="d-block w-100 ban1" height="300px" alt=""/>
        </div>
        <div class="carousel-item"data-interval="3000">
            <img src="https://i.postimg.cc/hGH0RqkL/footwear.jpg" className="d-block w-100 ban1" height="300px" alt=""/>
        </div>
    </div>
    <a href="#carouselDemo" className="carousel-control-prev" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
    </a>
    <a href="#carouselDemo" className="carousel-control-next" role="button" data-slide="next">
        <span className="carousel-control-next-icon"></span>
    </a>
</div>
</div>

            </div>
        )
    }
};