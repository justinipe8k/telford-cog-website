import React from "react";
import { Link } from "react-router-dom";
import PastorsListItem from "../PastorsListItem/PastorsListItem";
import pr_biju_cherian from "../../images/photos/pr_biju_cherian.jpg";
import br_rejoy from "../../images/photos/br_rejoy.jpg";
import br_linu_thomas from  "../../images/photos/br_linu_thomas.jpg";
import sunday_school_teachers from  "../../images/photos/sunday_school_teachers.jpg";
import "./LeadersList.css";
import LeaderItem from "./LeaderItem.jsx";

const LeadersList = function (props) {
  return (
    <div className="LeadersList">
      <LeaderItem
        image={pr_biju_cherian}
        name="Pr. Biju Cherian"
        designation="Pastor"
        decription='He is an ordained minister from The Church of God and he is pastoring the Mahanaim Church of God, Manchester,Telford and Keighly '
        socialMedia = {true}
        fb='https://www.facebook.com/bijujoseph.cherian'
        wa='https://wa.me/447411539877'
     />

      <LeaderItem
        image={br_rejoy}
        name="Br. Rejoy Stephan"
        designation="Worship Leader"
        decription='He is basically from Thrissur, Kerala and a great keyboard player. He leads the worship and organizes the meetings and events of the Church.'
        socialMedia = {true}
        fb='https://www.facebook.com/rejoystephan.thadathil'
      wa='https://wa.me/447404535362'
      />

<LeaderItem
        image={br_linu_thomas}
        name="Br. Linu Thomas"
        designation="Youth Secretary"
        decription='He is basically from Adoor, Kerala and a nurse by profession.'
        socialMedia = {true}
        fb='https://www.facebook.com/linuthomas911'
        wa='https://wa.me/447721687207 '
      />

<LeaderItem
        image={sunday_school_teachers}
        name="Sundayschool teachers"
        designation="Sundayschool teachers"
        decription=''
        socialMedia = {false}
      />
    </div>
  );
};

export default LeadersList;
