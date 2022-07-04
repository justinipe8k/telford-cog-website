import React from "react";
import "./HomeMeetingInfo.css";

const HomeMeetingInfo = () => (
    <div className="parentDiv">
        <div className="heading"> <h2>Our Meetings</h2> </div>
    <div className="flex-container">
        <div className="flex-item1">
            <h3>Weekly Fellowship</h3>
            <br/>
            <p>Every Saturday</p>
            <p>10:30 AM to 01:00 PM</p>
        </div>
        <div className="flex-item2">
        <h3>Sunday School</h3>
        <br/>
            <p>Every Saturday</p>
            <p>09:30 AM to 10:30 AM</p>
        </div>
        <div className="flex-item3">
        <br/>
        <h4>Young People's Endeavour (YPE)</h4>
        <p>Every 4th Saturday</p>
        <p></p><p></p>
        <h4>Cottage Meeting</h4>
        <p>Every 1st Friday</p>
        </div>
    </div>
    </div>
)

export default HomeMeetingInfo
