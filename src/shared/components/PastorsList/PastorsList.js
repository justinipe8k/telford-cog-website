import React from "react";
import { Link } from "react-router-dom";
import PastorsListItem from "../PastorsListItem/PastorsListItem";
import pr_biju_cherian from "../../images/photos/pr_biju_cherian.jpg";
import br_rejoy from "../../images/photos/br_rejoy.jpg";
import "./PastorsList.css";

const PastorsList = function (props) {
  return (
    <div className="PastorsList">
      <div className="wrapper wrapper--content">
        <div className="PastorsList__content">
         { /*<Link to="/pastors/pr-joseph-k-joseph">*/}
            <PastorsListItem
              id="joseph"
              photo={pr_biju_cherian}
              name="Pr. Biju Cherian"
              role="Pastor"
            />
          {/*</Link>*/}
          <div className="PastorsList__divider"></div>
          {/* {<Link to="/pastors/pr-joshua-joseph">} */}
            <PastorsListItem
              id="joshua"
              photo={br_rejoy}
              name="Br. Rejoy Stephan"
              role="Worship Leader"
            />
          {/* {</Link>} */}
        </div>
      </div>
    </div>
  );
};

export default PastorsList;
