import React from "react";
import {FooterWrap} from "../../components/footer/FooterStyle";
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import {SlSocialTwitter} from "react-icons/sl"
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa"
import {TfiEmail} from "react-icons/tfi"

const Footer = () => {

  return (
    <FooterWrap>
      <div  className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <img src={mainLogo} alt="Logo" className="app-logo"></img>
          <img src={appName} alt="Logo" className="app-name"></img>
        </div>
        <div className="foot_item">
          <p>Portforlio</p>
          <p className="last_p">About Us</p>
        </div>
        <div className="foot_item contact-us">
          <p>FCT - Abuja, Nigeria</p>
          <p className="last_p"><span className="sm_contact"><span className="sm_contact_1_mobile">Naza: (+234) 8167265619</span><span className="sm_contact_2_mobile"> <span className="pipe-txt"></span></span></span></p>
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