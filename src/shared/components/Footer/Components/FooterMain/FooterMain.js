import React from "react";
import SocialMediaIconSet from "../SocialMediaIconSet/SocialMediaIconSet";
import "./FooterMain.css";
import { Link } from 'react-router-dom';

const FooterMain = function (props) {
  const socialmedia = [
    {
      name: "facebook",
      url: "https://www.facebook.com/mahanaimtelford/",
    },
    {
      name: "whatsapp",
      url: "https://wa.me/447411539877",
    },
    {
      name: "youtube",
      url: "https://youtube.com/channel/UCKUpMHwj5LLw2wEB2qK3lpA",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/mahanaimchurchtelford/?igshid=YmMyMTA2M2Y=",
    },
  ];

  return (
    <div className="FooterMain">
      <div className="FooterMain__holder">
      <Link to="/">
        <div className="FooterMain__logo">
          <div className="FooterMain__logo__image"></div>
        </div>
        </Link>
        <div className="FooterMain__socialmedia">
          <SocialMediaIconSet list={socialmedia} />
        </div>
        <div className="FooterMain__copyright">
          <span className="FooterMain__copyright__sign">&copy;</span>
          <span className="FooterMain__copyright__year">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
