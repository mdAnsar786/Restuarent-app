import React from 'react';
import eating from '../../Assets/Images/pizza-eating.jpg'
import eating1 from '../../Assets/Images/Pizza=eating1.jpg'
import eating2 from '../../Assets/Images/Pizza-eating2.jpg'
import eating4 from '../../Assets/Images/eating4.jpg'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div style={{marginBottom:"25px",marginTop:"20px"}}>
                <h2 className="text-color">NEWS & BLOGS</h2>
                <h1>What’s Happening Your
                   Near City & Town</h1>
            </div>
            <Row className="row row-cols-1 row-cols-md-4 g-2">
           <Col>
          <Card className="shadow p-3 mb-5 bg-body rounded" style={{height:"auto"}}>
            <Card.Img variant="top" src={eating} alt="" />
           <Card.Body>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-calendar"></i></span>
                <p style={{color:"#0014FF"}}>February10th 2023</p>
             </div>
           <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-tag"></i></span>
                <p style={{color:"#0014FF"}}>Burger</p>
             </div>
            </div>
        <Card.Title style={{marginTop:"15px",textAlign:"left"}}>Chicken Strips With New Ingridents Made.</Card.Title>
              <Card.Text style={{textAlign:"left", marginTop:"12px"}}>
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various
              </Card.Text>
              <div className="Next">
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
           <Col>
          <Card className="shadow p-3 mb-5 bg-body rounded" style={{height:"auto"}}>
            <Card.Img variant="top" src={eating1} alt="" />
           <Card.Body>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-calendar"></i></span>
                <p style={{color:"#0014FF"}}>February10th 2023</p>
             </div>
           <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-tag"></i></span>
                <p style={{color:"#0014FF"}}>Burger</p>
             </div>
            </div>
        <Card.Title style={{marginTop:"15px",textAlign:"left"}}>Do You Think About Cheese Pizza Recipes?</Card.Title>
              <Card.Text style={{textAlign:"left", marginTop:"12px"}}>
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various
              </Card.Text>
              <div className="Next">
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
           <Col>
          <Card className="shadow p-3 mb-5 bg-body rounded" style={{height:"auto"}}>
            <Card.Img variant="top" src={eating2} alt="" />
           <Card.Body>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-calendar"></i></span>
                <p style={{color:"#0014FF"}}>February10th 2023</p>
             </div>
           <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-tag"></i></span>
                <p style={{color:"#0014FF"}}>Burger</p>
             </div>
            </div>
        <Card.Title style={{marginTop:"15px",textAlign:"left"}}>Hot Chessyraw Pasta Make Creator Fact.</Card.Title>
              <Card.Text style={{textAlign:"left", marginTop:"12px"}}>
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various
              </Card.Text>
              <div className="Next">
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
           <Col>
          <Card className="shadow p-3 mb-5 bg-body rounded" style={{height:"auto"}}>
            <Card.Img variant="top" src={eating4} alt="" />
           <Card.Body>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-calendar"></i></span>
                <p style={{color:"#0014FF"}}>February10th 2023</p>
             </div>
           <div className='calender-type'>
                <span style={{color:"#F9F54B"}}><i className="fa fa-tag"></i></span>
                <p style={{color:"#0014FF"}}>Burger</p>
             </div>
            </div>
        <Card.Title style={{marginTop:"15px",textAlign:"left"}}>Pizza Hut is an American multinational restaurant.</Card.Title>
              <Card.Text style={{textAlign:"left", marginTop:"12px"}}>
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various
              </Card.Text>
              <div className="Next">
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
        </Row>
        </div>
    );
};

export default Blog;