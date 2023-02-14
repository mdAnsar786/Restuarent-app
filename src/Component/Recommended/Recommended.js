import React from "react";
import version from "../../Assets/Images/Pizza1.jpg";
import french from "../../Assets/Images/french-fries.webp";
import pepsi from "../../Assets/Images/cold-drink.png";
import Reshmi from "../../Assets/Images/Chicken-_reshmi.png";
import burger from "../../Assets/Images/chicken-burger.png";
import mughlia from "../../Assets/Images/mughalia-parata.png";
import tandoori from "../../Assets/Images/chicken-tandoori.png";
import sandwich from "../../Assets/Images/chicken-sandwich.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Recommended.css";

const Recommended = () => {
  return (
    <div>
      <div className="head">
        <h2>Fresh from Panpie</h2>
        <h1> We offer people best way to Eat Best food</h1>
      </div>
      <div>
        <button className="toggle">ALL</button>
        <button className="toggle">Donuts</button>
        <button className="toggle">Pizza</button>
        <button className="toggle">Drinks</button>
        <button className="toggle">Sandwich</button>
      </div>
      <Row ClassName="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"30px"}}>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={version} alt="" />
            <Card.Body>
              <Card.Title>Pizza</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 120</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img
              variant="top"
              src={french}
              alt=""
              style={{ height: "148px", width: "149px", marginLeft: "30px" }}
            />
            <Card.Body>
              <Card.Title>French Fries</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                French fries are served hot, either soft or crispy, and are
                generally eaten as part of lunch or dinner or by themselves as a
                snack,
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 80</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img
              variant="top"
              src={pepsi}
              alt=""
              style={{ height: "149px", width: "149px", marginLeft: "30px" }}
            />
            <Card.Body>
              <Card.Title>Cold drink</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                A soft drink is a drink that usually contains water (often
                carbonated), a sweetener, and a natural and/or artificial
                flavoring. The sweetener may be a sugar
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 50</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img
              variant="top"
              src={Reshmi}
              alt=""
              style={{ height: "148px", width: "149px", marginLeft: "30px" }}
            />
            <Card.Body>
              <Card.Title>Chicken Reshmi kabab</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Chicken Reshmi Kabab is made with boneless chicken pieces that
                are marinated in a simple marinade of cheese, skewered and than
                baked, grilled,
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 80</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={burger} alt="" />
            <Card.Body>
              <Card.Title>Chicken burger</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                A chicken sandwich is a sandwich that typically consists of
                boneless, skinless chicken breast or thigh served between slices
                of bread,
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 110</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={mughlia} alt="" />
            <Card.Body>
              <Card.Title>Mughlai paratha</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Mughlai paratha is a popular Bengali street food of soft fried
                bread enhanced by a stuffing of keema (minced meat), egg,
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 120</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img
              variant="top"
              src={tandoori}
              alt=""
              style={{ height: "148px", width: "149px", marginLeft: "30px" }}
            />
            <Card.Body>
              <Card.Title>Chicken Tandoori</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Tandoori chicken is a South Asian dish of chicken marinated in
                yogurt and spices and roasted in a tandoor, a cylindrical clay
                oven
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 140</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="Card">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img
              variant="top"
              src={sandwich}
              alt=""
              style={{ height: "148px", width: "149px", marginLeft: "30px" }}
            />
            <Card.Body>
              <Card.Title>Chicken Sandwich</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                A chicken sandwich is a sandwich that typically consists of
                boneless, skinless chicken breast or thigh served between slices
                of bread,
              </Card.Text>
              <div className="Button">
                <div>
                  <Button
                    variant="primary"
                    style={{
                      width: "120px",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div style={{paddingTop:"6px"}}>Price: 100</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Recommended;
