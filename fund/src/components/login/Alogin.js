import React from 'react';
import './login.css';
import Navbarlog from './Navbarlog'

const Alogin = () => (
    <>
        <Navbarlog/>
        <center >
            <h1 style={{ color: "white", padding:"3rem" }}>Admin login</h1>
            <div className="login-content__input">

                <input type="email" placeholder="Your Admin ID" />
                 <br />
                 <br />
                <input type="passsword" placeholder="Password" />
                <br />
                <br />
                <button type="button">Login</button>
            </div>
        </center>
    </>
);

export default Alogin;