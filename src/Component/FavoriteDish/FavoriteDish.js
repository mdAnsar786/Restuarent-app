import React from "react";
import photo from "../../Assets/Images/biryani.png";
import aerrow from "../../Assets/Images/aerrow.jpg";
import finger from "../../Assets/Images/french-fries.webp"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FavoriteDish.css";

const FavoriteDish = () => {
  return (
    <div >
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
   <div>
   {/* <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
          
            <Card.Body>
              <Card.Title>French Fries</Card.Title>
               <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "30px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
               </div>
              <Card.Img
              variant="top"
              src={finger}
              alt=""
              style={{ height: "148px", width: "149px", marginLeft: "30px" }}
            />
            </Card.Body>
          </Card>
        </Col> */}
   </div>
    </div>
   
  );
};

export default FavoriteDish;
