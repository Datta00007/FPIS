import React, { useState } from 'react';
import './login.css';
import Navbarlog from './Navbarlog'
import axios from "axios";
import { useHistory } from "react-router-dom"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Csignup = () => {
    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        username: "",
        password: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, phone, address, username, password } = user
        if (name && email && password && phone && address && username) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    toast.success(res.data.message, {theme: "dark",position: toast.POSITION.TOP_LEFT})

                    history.push("/clogin")
                })
        } else {
            toast.error("invlid input", {theme: "dark",position: toast.POSITION.TOP_LEFT})
        }

    }
    return (
        <>
            <Navbarlog />
            <center >
                <h1 style={{ color: "white", padding: "3rem" }}>Client Registration</h1>
                <div className="login-content__input" >

                    <input type="text" name="name" value={user.name} autoFocus={true} placeholder="Your Company Name" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="email" name="email" value={user.email} placeholder="Official mail ID" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="number" name="phone" value={user.phone} placeholder="Contact No" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="address" name="address" value={user.address} placeholder="Address" onChange={handleChange} />
                    <br />
                    <br />
                    {/* <input type="text" placeholder="Type of Product" />
                 <br />
                 <br />
                 <input type="text" placeholder="Product name" />
                 <br />
                 <br /> */}
                    <input type="text" name="username" value={user.username} placeholder="Create Your ID" 
                        autoComplete="off" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="password" name="password" value={user.password} placeholder="Create Password" 
                        autoComplete="off" onChange={handleChange} />
                    <br />
                    <br />
                    <button type="button" onClick={register}  >Submit</button>
                </div>
            </center>
            <br /><br />

        </>
    )
};

export default Csignup;