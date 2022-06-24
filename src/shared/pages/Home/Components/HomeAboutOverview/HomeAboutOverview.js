import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import "./HomeAboutOverview.css";
import { ListGroup } from 'react-bootstrap';

const HomeAboutOverview = function (props) {
  return (
    <div className="HomeAboutOverview">
      <div className="wrapper wrapper--text">
        <div className="HomeAboutOverview__text">
          <h2 className="h2--thin">Overview</h2>
          <p>
            {/* We are a church that honors God's Word, 
            believes in the work of the Holy Spirit, and worship the Lord in spirit and truth. 
            We are a caring and loving church that has been in existence since 01 July 2021. 
            We are a missionary-minded church that believes in reaching the unreached with the love of Jesus Christ. */}
            <ListGroup variant="flush" style={{backgroundColor:' #cccccc'}}>
              <ListGroup.Item>
                We are a church that honors God's Word, believes in the work of
                the Holy Spirit, and worship the Lord in spirit and truth.
              </ListGroup.Item>
              <ListGroup.Item>
                Caring and loving church that has been in existence since 01
                July 2021.
              </ListGroup.Item>
              <ListGroup.Item>
                Missionary-minded church that believes in reaching the unreached
                with the love of Jesus Christ.
              </ListGroup.Item>
            </ListGroup>
            <ul>
              <li></li>
              <li> </li>
              <li> </li>
            </ul>
          </p>
          <br />
          <br />
          <Link to="/about">
            <Button text="Learn More" type="outline" bgColor="#263238" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutOverview;
