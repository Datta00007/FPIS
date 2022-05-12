import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './login.css';

const Navbarlog = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          <h1 >
            <b>FPIS</b>
          </h1>

        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="/">Home</a></p>
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/* <a href="/contact"><p>Contact</p></a> */}
        <a href="/csignup"><p>Sign up</p></a>
        <a href="/clogin"><button type="button">Sign in</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="/">Home</a></p>
            
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
            <a href="/clogin"><p>Sign in</p></a>
        <a href="/csignup"><button type="button">Sign up</button></a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbarlog;
