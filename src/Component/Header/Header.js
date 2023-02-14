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
     <i className="fa fa-phone"style={{background:"red", borderRadius:"50%",width:"40px",height:"30px",color:"white"}}> </i>
     <span>+091xxxxxxx45</span>
    </span>
     <span style={{ fontSize: "25px" ,marginLeft: "25px"}}>
     <i className="fa fa-cart-arrow-down" style={{borderRadius:"50%",background:"orange",color:"white",height:"30px",width:"40px"}}></i>
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