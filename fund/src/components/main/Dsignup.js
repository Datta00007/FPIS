import React, { useState } from 'react';
import '../login/login.css';
import Mainnavbar from './Mainnavbar'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useHistory } from "react-router-dom"

// toast.configure();
const Dsignup = () => {
    // const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        owner:sessionStorage.getItem("username"),
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

    const register = (e) => {
        e.preventDefault();
        const { name, email, phone, owner, username, password } = user;
        if (name && email && password && phone && username && owner) {
            axios.post("http://localhost:9002/dsignup", user)
                .then(res => {
                    toast(res.data.message,{position: toast.POSITION.TOP_LEFT})
                    // console.log(res.data.message);
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 2000);
                    
                })
        } else {
            toast("invlid input",{position: toast.POSITION.TOP_LEFT})
        }

    }
    return (
        <>
            <Mainnavbar />
            <center >
                <h1 style={{ color: "white", padding: "3rem" }}>Client/Dealer Registration</h1>
                <div className="login-content__input" >

                    <input type="text" name="name" value={user.name} autoFocus={true} placeholder="Your Client Name" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="email" name="email" value={user.email} placeholder=" email ID" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="number" name="phone" value={user.phone} placeholder="Contact No" onChange={handleChange} />
                    <br />
                    <br />
                    
                    <input type="text" name="username" value={user.username} placeholder="Create username" 
                        autoComplete="off" onChange={handleChange} />
                    <br />
                    <br />
                    <input type="password" name="password" value={user.password} placeholder="Create Password" 
                        autoComplete="off" onChange={handleChange} />
                    <br />
                    <br />
                    <button type="button" onClick={e =>{register(e)}}  >Submit</button>
                </div>
            </center>
            <br /><br />

        </>
    )
};

export default Dsignup;