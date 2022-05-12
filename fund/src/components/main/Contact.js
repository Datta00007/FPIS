import React, { useState } from 'react';
import '../login/login.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Profile from '../popup/Profile';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [userProfile, setUserProfile] = useState(false);
    const history = useHistory();
    const logout = () => {
        sessionStorage.clear();
        history.push("/");
    }

    return (
        <>
            <div className="gpt3__navbar">
                <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                        <h2 >
                            <a href="/main"><b>Dashboard</b></a>
                        </h2>
                    </div>
                    <div className="gpt3__navbar-links_logo">
                        <h2>UserID: {sessionStorage.getItem("username")}</h2>
                    </div>


                </div>
                <div className="gpt3__navbar-sign">
                    <a href="/contact"><p>Contact</p></a>
                    <a href="/dsignup"><p>Add Client</p></a>
                    <a href="/clientlist"><p>Client List</p></a>

                    <a onClick={() => setUserProfile(true)} ><p>Profile</p></a>

                    <button onClick={logout}>Logout</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <p><a href="/main">Home</a></p>

                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <a href="/dsignup"><p>Add Client</p></a>
                                <a href="/clientlist"><p>Client List</p></a>

                                <a onClick={() => { setToggleMenu(false); setUserProfile(true); }}><p>Profile</p></a>

                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Profile trigger={userProfile} setTrigger={setUserProfile} />
        </>
    );
};

const Contact = () => {
    const history = useHistory()

    const [user, setUser] = useState({
        name: sessionStorage.getItem("name"),
        username: sessionStorage.getItem("username"),
        message: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const contact = () => {
        console.log(user)
        axios.post("http://localhost:9002/contact", user)
            .then(res => {
                toast.success(res.data.message, { theme: "dark" })
                //window.location.reload(false);
                history.push("/main");
            })
    }


    return (
        <>
            <Navbar />
            <center >

                <h1 style={{ color: "white", padding: "3rem" }}>Contact</h1>

                <div className="login-content__input">

                    <input style={{ color: "white" }} type="text" name="name" value={user.name} placeholder={user.name} disabled="true" />
                    <br />
                    <br />
                    <input style={{ color: "white" }} type="text" name="username" value={user.username} placeholder={user.username} disabled="true" />
                    <br />
                    <br />
                    <textarea type="textarea" name="message" value={user.message} onChange={handleChange} placeholder="Write Message" />
                    <br />
                    <br />
                    <button onClick={contact} type="button">Send</button>
                </div>
            </center>
        </>)
};

export default Contact;