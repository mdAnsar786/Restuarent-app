import React from "react";
import pizza from "../../Assets/Images/Dominos-Pizza-Slice-PNG.png";
import Mutton from "../../Assets/Images/mutton.png";
import Burger from "../../Assets/Images/Burger-king (2).png";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div className="menuDiv">
        <div>
          <h1 className="Pizza-title">
            We Have <span>Excellent</span> Of
            <span> Quality </span>Pizza
          </h1>
          <button className="menu-button">See All Menu</button>
        </div>
        <div>
          <img src={pizza} alt="" />
        </div>
      </div>
      <div className="menuDiv">
      <div>
        <img src={Mutton} alt="" />
        </div>
        <div>
          <h1 className="Pizza-title">
           Kolkata<span>Special</span> Mutton
            <span>Briyani </span>
            <h5 style={{fontSize:"20px", marginTop:"opx"}}>We put 100% of love and dedication into our dish</h5>
          </h1>
        
          <button className="menu-button">See All Menu</button>
        </div>
    
      </div>

      <div>
        <div className="menuDiv">
          <div>
            <h1 className="Pizza-title">
              Chicken
              <span> King Burger</span>
            </h1>
            <button className="menu-button">See All Menu</button>
          </div>
          <div>
            <img src={Burger} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
