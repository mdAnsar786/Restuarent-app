import React from "react";
import photo from "../../Assets/Images/Dum biryani.png";
import aerrow from "../../Assets/Images/aerrow.jpg";
import finger from "../../Assets/Images/french-fries.webp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FavoriteDish.css";

const FavoriteDish = () => {
  return (
    <div>
      <div className="Dish">
        <div>
          <img
            src={aerrow}
            alt=""
            style={{ width: "300px", marginTop: "15px" }}
          />
          <h1 className="spicy-biryani">
            <span> Enjoye your Dum</span>
            <span>Biryani in Town</span>
          </h1>
          <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column" }} >
            <li className="fa fa-check-circle" style={{ fontSize: "25px", color: "red", marginBottom: "10px" }}> <span style={{ color: "black", padding: "10px", fontSize: "20px"}}>Zamatoo delivery</span></li>
            <li className="fa fa-check-circle" style={{ fontSize: "25px", color: "red", marginBottom: "10px" }}> <span style={{ color: "black", padding: "1px", fontSize: "20px"}}>29/h/24 Linton street</span></li>
            <li className="fa fa-check-circle" style={{ fontSize: "25px", color: "red" }}> <span style={{color: "black", padding: "14px", fontSize: "21px"}}>pin code 700014</span></li>
          </ul>
          <button className="link-button">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: " 5px 5px 5px 5px",
              }}
            >
              <span>
                <i
                  className="fa fa-cart-arrow-down"
                  style={{ fontSize: "20px" }}
                ></i>
              </span>
              <span>Order Now</span>
            
            </div>
          </button>
        </div>
        <div>
          <img src={photo} alt="" style={{ maxWidth: "500px", marginRight: "50px" }} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteDish;
