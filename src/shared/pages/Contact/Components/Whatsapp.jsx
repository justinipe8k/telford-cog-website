import React from "react";
import "../Contact.css";
import Email_icon from "../../../images/icons/whatsapp.png";
import Email_icon_2 from "../../../images/icons/whatsapp-2.png";

const Whatsapp = () => {
  return (
    <div className="Contact-Card-Parent">
        <div className="Contact-Card-Heading">WhatsApp</div>
      <div className="Contact-Card-Image">
        <img alt='icon' src={Email_icon} style={{width:'100%',height:'100%'}}/>
      </div>
      <div>
      <div> Pr. Biju Cherian</div>
      <div className="Contact-Card-Details" >
       <a href='https://api.whatsapp.com/send/?phone=447411539877&text&app_absent=0'> +44 7411 539877</a>
      </div>
      </div>
      <div className="Contact-Card-Footer-Image">
        <a href='https://api.whatsapp.com/send/?phone=447411539877&text&app_absent=0'>
          <img alt='wa icon' src={Email_icon_2} style={{width:'100%',height:'100%'}}/>
          </a>
        </div>
    </div>
  );
};

export default Whatsapp;
