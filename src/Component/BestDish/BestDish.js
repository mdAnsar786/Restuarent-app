import React from "react";
import picture from "../../Assets/Images/cold-drink.png"
import { Card, Col, Row } from "react-bootstrap";
import newPic1 from "../../Assets/Images/pizza2.png";
import french from "../../Assets/Images/frenchfred.png";
import './BestDish.css'

const BestDish = () => {
  return (
    <Row ClassName="row row-cols-1 row-cols-md-3 g-4">
      <Col >
        <Card className="menu-card">
          <div>
          <div className="flow-card">Soft Drinks
          <div>
         <button className="Dish-icon">
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <span>
                <i
                  className="fa fa-arrow-right"
                  style={{ fontSize: "16px" }}
                ></i>
              </span>
              <span style={{fontSize:"16px",marginTop:"5px"}}>See Menu</span>
            </div>
          </button>
         </div>
          </div>
        </div>
      <div className="pizza-icon">
            {" "}
            <img src={picture} alt="" style={{width:"auto",height:"auto",marginLeft:"50px"}} />
          </div>
        </Card>
      </Col>
      <Col >
        <Card className="menu-card">
          <div>
          <div className="flow-card">Maxican Pizza
          <div>
         <button className="Dish-icon">
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <span>
                <i
                  className="fa fa-arrow-right"
                  style={{ fontSize: "16px" }}
                ></i>
              </span>
              <span style={{fontSize:"16px",marginTop:"5px"}}>See Menu</span>
            </div>
          </button>
         </div>
          </div>
        </div>
      <div className="pizza-icon">
            {" "}
            <img src={newPic1} alt="" style={{width:"218px",height:"200px",marginLeft:"38px",marginTop:"37px"}} />
          </div>
        </Card>
      </Col>
      <Col >
        <Card className="menu-card">
          <div>
          <div className="flow-card">french Fry
          <div>
         <button className="Dish-icon">
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <span>
                <i
                  className="fa fa-arrow-right"
                  style={{ fontSize: "16px" }}
                ></i>
              </span>
              <span style={{fontSize:"16px",marginTop:"5px"}}>See Menu</span>
            </div>
          </button>
         </div>
          </div>
        </div>
      <div className="pizza-icon">
            {" "}
            <img src={french} alt="" style={{width:"190px",height:"250px",marginLeft:"50px", marginTop:"20px"}} />
          </div>
        </Card>
      </Col>
     
    </Row>
  );
};

export default BestDish;
