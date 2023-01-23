import React from 'react';
import './Header.css';
import image from '../../Assets/Images/Logo-preview.png';

const Header = () => {
    return (
        <div>
    
 <div className="head-Section">
     <ul className="list-name">
      <li className="list">Home</li>
      <li className="list">Menu</li>
      <li className="list">Pages</li>
      <li className="list">Blog</li>
      <li className="list">Shop</li>
     <img src={image} alt="" className="image-size"/>
     <span style={{ fontSize: "25px",marginLeft: "70px" }}>
     <i className="fa fa-phone"> +091xxxxxxx45</i>
    </span>
     <span style={{ fontSize: "25px" ,marginLeft: "25px"}}>
     <i className="fa fa-cart-arrow-down"></i>
    </span>
     <span style={{ fontSize: "25px",marginLeft: "25px"}}>
     <i className="fa fa-search magnifying-glass"></i>
    </span>
  </ul>
    </div>
</div>
    );
};

export default Header;