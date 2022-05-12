import React, { useState } from 'react';
import './login.css';
import Navbarlog from './Navbarlog';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Clogin = () => {
  const history = useHistory()

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:9002/login", user)
      .then(res => {
        //console.log(res.data.user);
        toast(res.data.message, {theme: "dark",position: toast.POSITION.TOP_LEFT})
        sessionStorage.clear();
        sessionStorage.setItem("name", res.data.user.name);
        sessionStorage.setItem("email", res.data.user.email);
        sessionStorage.setItem("phone", res.data.user.phone);
        sessionStorage.setItem("address", res.data.user.address);
        sessionStorage.setItem("username", res.data.user.username);

       

        history.push("/main")
      })
  }
  return (
    <>
      <Navbarlog />
      <center >

        <h1 style={{ color: "white", padding: "3rem" }}>Client login</h1>

        <div className="login-content__input">

          <input type="text" name="username" value={user.username} onChange={handleChange} autoFocus={true}
            autoComplete="off" placeholder="Your Username" />
          <br />
          <br />
          <input type="password" name="password" value={user.password} onChange={handleChange} 
            autoComplete="off" placeholder="Password" />
          <br />
          <br />
          <button onClick={login} type="button">Login</button>
        </div>
      </center>
    </>)
};

export default Clogin;