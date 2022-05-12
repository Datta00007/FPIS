import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import Profile from '../popup/Profile';
import './main.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mainnavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [userProfile, setUserProfile] = useState(false);
    const history = useHistory();
    const logout = () => {
        sessionStorage.clear();
        toast.success("Logout Successful");
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
                                <p><a href="/">Home</a></p>

                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <a href="/contact"><p>Contact</p></a>
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

export default Mainnavbar;
