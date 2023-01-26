import React from 'react';
import eating from '../../Assets/Images/pizza-eating.jpg'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className="text-color">NEWS & BLOGS</h2>
                <h1>What’s Happening Your
                   Near City & Town</h1>
            </div>
            <Row lassName="row row-cols-1 row-cols-md-3 g-2">
            {/* <Col className="Card1">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={eating} alt="" />
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
                      height: "30px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div>Price: 120</div>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
            <Col className="Card1">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={eating} alt="" />
           <Card.Body>
           <div>
                <div><i class="fa fa-calendar-days"></i></div>
                <div></div>
             </div>
             <Card.Title>Pizza</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various
              </Card.Text>
              <div className="Next-Button">
                <div>
                 Read More
                </div>
                <div>
                <i class="fa fa-chevron-right"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
            {/* <Col className="Card1">
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={eating} alt="" />
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
                      height: "30px",
                    }}
                  >
                    {" "}
                    Large
                  </Button>
                </div>
                <div>Price: 120</div>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
            </Row>
        </div>
    );
};

export default Blog;