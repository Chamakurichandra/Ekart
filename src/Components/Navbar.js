import React from 'react';
import "./Navbar.css";
export default class Navbar extends React.Component{
    render(){
        return(
            <div>
     <div class="nav">
    <ul>
        <li >
            <div class="dropdown">
            <a href="#" data-toggle="dropdown"><b>Electronics</b></a>
        <div class="dropdown-menu">
            <div class="Main-menu">
                <div class="sub-menu-1">
            <a href="#" class="dropdown-item"><h5>Mobiles</h5></a>
            <a href="#" class="dropdown-item">Realme</a>
            <a href="#" class="dropdown-item">Mi</a>
            <a href="#" class="dropdown-item">Oppo</a>
            <a href="#" class="dropdown-item">Samsung</a>
            <a href="#" class="dropdown-item">Iphone</a>
            <a href="#" class="dropdown-item">One Plus</a>
        </div>
        <div class="sub-menu-2">
            <a href="#" class="dropdown-item"><h5>TV's</h5></a>
            <a href="#" class="dropdown-item">Mi</a>
            <a href="#" class="dropdown-item">Samsung</a>
            <a href="#" class="dropdown-item">LG</a>
            <a href="#" class="dropdown-item">VGS</a>
            <a href="#" class="dropdown-item">Philips</a>
            <a href="#" class="dropdown-item">Sony</a>
        </div>
        <div class="sub-menu-3">
            <a href="#" class="dropdown-item"><h5>Laptops</h5></a>
            <a href="#" class="dropdown-item">HP</a>
            <a href="#" class="dropdown-item">Samsung</a>
            <a href="#" class="dropdown-item">LG</a>
            <a href="#" class="dropdown-item">Dell</a>
            <a href="#" class="dropdown-item">MI</a>
            <a href="#" class="dropdown-item">Sony</a>
        </div>
        </div>   

        </div>
       </div>
    </li>

        <li>
            <div class="dropdown">
                <a href="#" data-toggle="dropdown"><b>Men</b></a>
            <div class="dropdown-menu">
                <div class="Main-menu">
                    <div class="sub-menu-1">
                <a href="#" class="dropdown-item"><h5>Cloths</h5></a>
                <a href="#" class="dropdown-item">T-Shirts</a>
                <a href="#" class="dropdown-item">Formal Shirts</a>
                <a href="#" class="dropdown-item">Casual Shirts</a>
                <a href="#" class="dropdown-item">Jeans Pants</a>
                <a href="#" class="dropdown-item">Casual Pants</a>
                <a href="#" class="dropdown-item">Shorts</a>
                <a href="#" class="dropdown-item">Cargos</a>
            </div>
            <div class="sub-menu-2">
                <a href="#" class="dropdown-item"><h5>FootWear</h5></a>
                <a href="#" class="dropdown-item"> Sports Shoes</a>
                <a href="#" class="dropdown-item">Casual Shoes</a>
                <a href="#" class="dropdown-item">Sandals</a>
                <a href="#" class="dropdown-item">Striker</a>
                <a href="#" class="dropdown-item">Paragon</a>
                <a href="#" class="dropdown-item">Woodland</a> 
            </div>
            </div>
            </div>
           </div>
        </li>
        <li>
            <div class="dropdown">
                <a href="#" data-toggle="dropdown"><b>Women</b></a>
            <div class="dropdown-menu">
             <div class="Main-menu">
             <div class="sub-menu-1">
                <a href="#" class="dropdown-item"><h5>Cloths</h5></a>
                <a href="#" class="dropdown-item">Sarees</a>
                <a href="#" class="dropdown-item">Kurtas&Kurtis</a>
                <a href="#" class="dropdown-item">Lehanga Choli</a>
                <a href="#" class="dropdown-item">Jeans </a>
                <a href="#" class="dropdown-item">Gowns</a>
                <a href="#" class="dropdown-item">Shorts</a>
                <a href="#" class="dropdown-item">Palazzos</a>
            </div>
            <div class="sub-menu-2">
                <a href="#" class="dropdown-item"><h5>FootWear</h5></a>
                <a href="#" class="dropdown-item"> Sports Shoes</a>
                <a href="#" class="dropdown-item">Casual Shoes</a>
                <a href="#" class="dropdown-item">Sandals</a>
                <a href="#" class="dropdown-item">Flats</a>
                <a href="#" class="dropdown-item">Heels</a>
                <a href="#" class="dropdown-item">Wedges</a> 
            </div>
            </div>
            </div>
           </div>
        </li>
        <li>
            <div class="dropdown">
                <a href="#"data-toggle="dropdown"><b>Baby&Kids</b></a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item"><h5>Baby Care</h5></a>  
                    <a href="#" class="dropdown-item">Diapers</a>
                    <a href="#" class="dropdown-item">Baby Food</a>
                    <a href="#" class="dropdown-item">Baby Grooming</a>
                    <a href="#" class="dropdown-item">Baby Bath, Hair& Skin Care</a>
                    <a href="#" class="dropdown-item">Baby Bedding</a>
                    <a href="#" class="dropdown-item">Baby Gear</a>
                    <a href="#" class="dropdown-item">Baby HealthCare& Medical</a>
                </div>
            </div>
        </li>
        <li>
            <div class="dropdown">
                <a href="#"data-toggle="dropdown"><b>Home&Furniture</b></a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Paintings</a>  
                    <a href="#" class="dropdown-item">Beds</a>
                    <a href="#" class="dropdown-item">Clocks</a>
                    <a href="#" class="dropdown-item">Strickers</a>
                    <a href="#" class="dropdown-item">Bulbs</a>
                    <a href="#" class="dropdown-item">Wall Lamps</a>
                    <a href="#" class="dropdown-item">Sofa Beds</a>
                    <a href="#" class="dropdown-item">Tables</a>
                </div>
            </div>
        </li>
        <li>
            <div class="dropdown">
                <a href="#"data-toggle="dropdown"><b>Bags</b></a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">School Bags</a>  
                    <a href="#" class="dropdown-item">College Bags</a>
                    <a href="#" class="dropdown-item">Laguage Bags</a>
                    <a href="#" class="dropdown-item">Skipe Bag</a>
                    <a href="#" class="dropdown-item">HP Bags</a>
                    <a href="#" class="dropdown-item">Dell Bags</a>
                    <a href="#" class="dropdown-item">Small Bags</a>
                    <a href="#" class="dropdown-item">Large Bags</a>
                </div>
            </div>
        </li>
    </ul>
</div>
            </div>
        )
    }
};
