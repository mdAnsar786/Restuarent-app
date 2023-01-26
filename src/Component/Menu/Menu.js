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
          <button className="menu-button">Order Now</button>
        </div>
        <div>
          <img src={pizza} alt="" />
        </div>
      </div>
      <div className="menuDiv1">
        <div>
          <img src={Mutton} alt="" />
        </div>
        <div>
          <h1 className="Pizza-title">
            Kolkata<span>Special</span> Mutton
            <span>Briyani </span>
            <h5 style={{ fontSize: "20px", marginTop: "opx" }}>
              We put 100% of love and dedication into our dish
            </h5>
          </h1>
          <p className="paragraphTag">
            Biryani is a mixed rice dish originating among the Muslims of the
            Indian subcontinent{" "}
            <span>
              as a variety of Persian pilaf. It is made with Indian spices,
              rice, ...
            </span>
          </p>
          <button className="menu-button">Order Now</button>
        </div>
      </div>

      <div>
        <div className="menuDiv2">
          <div>
            <h1 className="Pizza-title">
              Chicken
              <span> King Burger</span>
            </h1>
            <p className="paragraphTag">
              The company's first major chicken product, its Original Chicken
              Sandwich,{" "}
              <span>
                {" "}
                was also part of the company's 1978 Specialty Sandwich line. BK
                Chicken Tenders made ...
              </span>
            </p>
            <button className="menu-button">Order Now</button>
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
