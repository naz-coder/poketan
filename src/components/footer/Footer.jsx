import React from "react";
import {FooterWrap} from "../../components/footer/FooterStyle";
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import {SlSocialTwitter} from "react-icons/sl"
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa"
import {TfiEmail, TfiLocationPin} from "react-icons/tfi"
import {BsSendCheck} from "react-icons/bs"
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <FooterWrap>
      <div  className="foot">
      <div className="foot_flex">
        <Link to="/">
        <div className="foot_item-logo">
          <img src={mainLogo} alt="Logo" className="app-logo"></img>
          <img src={appName} alt="Logo" className="app-name"></img>
        </div>
        </Link>
        <a href="https://github.com/naz-coder">
        <div className="foot_item our-portfolio">
          <a target="blank" href="https://nazanajemba.vercel.app/" className="portfolio-link"><BsSendCheck className="portfolio"/><p>Visit Our Website</p></a>
        </div>
        </a>
        <div className="foot_item contact-us">
        <TfiLocationPin className="location-icon"/><p>FCT-Abuja, Nigeria - (+234) 8167265619</p>
        </div>
        <div className="foot_item">
          <div className="social_icons">
            <a href="https://wa.me/2348167265619"><FaWhatsapp className="whatsapp"/></a>
            <a href="https://www.twitter.com/TechSiz"><SlSocialTwitter className="twitter" /></a>
            <a href="https://github.com/naz-coder"><FaGithub className="github"/></a>
            <a href="mailto:nazanajemba@gmail.com/"><TfiEmail className="email" /></a>
            <a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196"><FaLinkedin className="linkedin" /></a>
          </div>
        </div>
      </div>
      <p className="copy">&copy; Naz-codes {new Date().getFullYear()}</p>
      </div>
    </FooterWrap>
  );
};

export default Footer;