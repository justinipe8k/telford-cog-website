import React from "react";
import "../Contact.css";
import { Card, Button } from "react-bootstrap";
import Email_icon from "../../../images/icons/call.png";
import Email_icon_2 from "../../../images/icons/call-2.png";
import { Link } from "react-router-dom";

const Call = () => {
const makeCall =()=>{}
  return (
    <div className="Contact-Card-Parent">
      <div className="Contact-Card-Heading">Call</div>
      <div className="Contact-Card-Image">
        <img src={Email_icon} style={{width:'100%',height:'100%'}}/>
      </div>
      <div>
      <div> Pr. Biju Cherian</div>
      <div className="Contact-Card-Details"  onClick={makeCall}>    
       <a href='tel:+447411539877'> +44 7411 539877</a>
      </div>
      </div>
      <div className="Contact-Card-Footer-Image" onClick={makeCall}>
      <a href='tel:+447411539877'>
          <img src={Email_icon_2} style={{width:'100%',height:'100%'}}/>
          </a>
        </div>
    </div>
  );
};

export default Call;
