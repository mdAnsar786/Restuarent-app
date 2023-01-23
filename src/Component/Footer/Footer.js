import React from 'react';
import version from '../../Assets/Images/Logo-preview.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
           
           <div className="footerDiv">
           <ul>
            <img src={version} alt="" className="display-img"/>
            <p style={{marginLeft:"70px"}}>29/H/24 Linton street kolkata-14 </p>
            <div className="iconDiv">
            <div className="Icon-box">
                <span style={{ fontSize: "20px" }}>
                  <i className="fa fa-google"></i>
                </span>
              </div>
              <div className="Icon-box">
                {" "}
                <span style={{ fontSize: "20px" }}>
                  <i className="fa fa-facebook"></i>
                </span>
              </div>
              <div className="Icon-box">
                {" "}
                <span style={{ fontSize: "20px" }}>
                  <i className="fa fa-linkedin"></i>
                </span>
              </div>
         </div>
            </ul>
            <div>
                <ul>
                    <h2>Hot Menu</h2>
                    <li>chicken Biryani </li>
                    <li> Pasta</li>
                    <li>Chicken BBQ</li>
                    <li>Chesses pizza </li>
                    <li>Chicken sandwich</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2>Opening Hours</h2>
                    <li>Monday: 10:00 am to 11:00 pm</li>
                    <li>Tuesday: 10:00 am to 11:00 pm</li>
                    <li>Wednesday: 10:00 am to 11:00 pm</li>
                    <li>Thursday: 10:00 am to 11:00 pm</li>
                    <li>Friday: Close</li>
                   
                </ul>
            </div>
       
            </div>
            <div className="boarder-text">
                <h4>
                    <span>© 2023 panpie. All Rights Reserved by RadiusTheme</span>
                </h4>
            </div>
            </div>
            
    
    );
};

export default Footer;