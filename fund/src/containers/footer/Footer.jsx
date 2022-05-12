import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="/csignup"><p>Register Now</p></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h1 >
          <b>FPIS</b>
        </h1>
        <p>
          <br /> WCE <br /><br /> Vishrambag Sangli <br /><br /> Maharashtra India <br /><br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <a href="/contact"><p>Contact</p></a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>WCE Vishrambag Sangli Maharashtra India</p>
        <p>0233-132567</p>
        <p>fpis@wcesangli.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 FPIS. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
