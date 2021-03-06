import React from "react";
import "../Contact.css";
import Email_icon from "../../../images/icons/email-icon.png";
import Email_icon_2 from "../../../images/icons/email-icon-2.png";

const Email = () => {
 const sendEmail=(message)=> {
    var email = 'mahanaimcogtelford@gmail.com';
    var subject = 'Regd some query';
    var emailBody = 'Hi Team,\n';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}
  return (
    <div className="Contact-Card-Parent">
        <div className="Contact-Card-Heading">Email</div>
      <div className="Contact-Card-Image">
        <img alt='email icon' src={Email_icon} style={{width:'100%',height:'100%'}}/>
      </div>
      <div className="Contact-Card-Details"  onClick={sendEmail}>
       <p className='email-link'> mahanaimcogtelford@gmail.com</p>
      </div>
      <div className="Contact-Card-Footer-Image" onClick={sendEmail}>
          <img alt='email icon' src={Email_icon_2} style={{width:'100%',height:'100%'}}/>
        </div>
    </div>
  );
};

export default Email;
