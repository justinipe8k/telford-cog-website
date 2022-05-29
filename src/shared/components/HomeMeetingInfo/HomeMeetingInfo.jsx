import React from "react";
import "./HomeMeetingInfo.css";

import { Grid, Image, Rail, Segment } from 'semantic-ui-react'

const HomeMeetingInfo = () => (
    <div className="parentDiv">
        <div className="heading"> <h2>Our Meetings</h2> </div>
    <div className="flex-container">
        <div className="flex-item">
            <h3>Weekly Fellowship</h3>
            <br/>
            <p>Saturday</p>
            <p>10:30 AM to 01:00 PM</p>
        </div>
        <div className="flex-item">
        <h3>Sunday School</h3>
        <br/>
            <p>Saturday</p>
            <p>09:30 AM to 10:30 AM</p>
        </div>
        <div className="flex-item">
        <br/>
        <p>YPE on 4th Saturday</p>
        <p>Lord's Table on 1st Saturday every month</p>
        </div>
    </div>
    </div>
)

export default HomeMeetingInfo
