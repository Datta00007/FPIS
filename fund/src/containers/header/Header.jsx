import React from 'react';
// import headphone from '../../assets/headphones.jpg';
// import ai from '../../assets/ai.png';
import edi from '../../assets/ethereum-development-icon.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's fight against counterfeiting and build your brand!</h1>
      <p>Protect your infrastructure from threats and ensure top performance by protecting your genuine products.</p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <a href="/csignup"><button type="button">Get Started</button></a>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={headphone} />
        <p></p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={edi} alt="ethereum"/>
    </div>
  </div>
);

export default Header;
