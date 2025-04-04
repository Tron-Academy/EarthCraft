import React from "react";
import "../Footer/Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import earthcraftlogo from "../../assets/earthcraftlogo.png";
import footerlogo from "../../assets/footerlogo_bg.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_logo">
          <img src={footerlogo} alt="Earthcraft Logo" />
        </div>
        
        <div className="footer_contact">
          <h3>Contact Information</h3>
          <div className="footer_contact_info">
            <div className="footer_info_item">
              <FaLocationDot className="footer_icon" />
              <p>Thrissur, Kerala, India</p>
            </div>
            <div className="footer_info_item">
              <FaPhoneVolume className="footer_icon" />
              <p>+91 8943626262</p>
            </div>
            <div className="footer_info_item">
              <MdEmail className="footer_icon" />
              <p>sales@caletal.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>&copy; {new Date().getFullYear()} Earth Craft. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;