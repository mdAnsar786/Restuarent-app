import React from "react";
import photo from "../../Assets/Images/biryani.png";
import aerrow from "../../Assets/Images/aerrow.jpg";
import "./FavoriteDish.css";

const FavoriteDish = () => {
  return (
    <div className="Dish">
      <div>
        <img
          src={aerrow}
          alt=""
          style={{ width: "300px", marginTop: "15px" }}
        />
        <h1>
          Enjoye your Dum
          <span>Biryani in Town</span>
        </h1>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>Zamatoo delivery
          </li>
          <li>
            <input
              type="checkbox"
              checked="checked"
              style={{ marginRight: "20px" }}
            />
            <span className="checkmark"></span> Lake Gardens
          </li>
          <li>
            <input
              type="checkbox"
              checked="checked"
              style={{ marginRight: "26px" }}
            />
            <span className="checkmark"></span> cheap Prices
          </li>
        </ul>
        <button className="link-button">
          <div style={{ display: "flex", justifyContent: "space-between", margin:" 5px 5px 5px 5px" }}>
            <span>
              <i className="fa fa-cart-arrow-down" style={{fontSize:"20px"}}></i>
            </span>
            <span>Order Now</span>
          </div>
        </button>
      </div>
      <div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default FavoriteDish;
