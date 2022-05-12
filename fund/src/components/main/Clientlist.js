import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import './card.css';
import Mainnavbar from './Mainnavbar';
import { toast } from 'react-toastify';
import uuid from 'react-uuid'
import 'react-toastify/dist/ReactToastify.css';

// import Update from './Update';

// toast.configure();
function Clientlist() {
    // const history = useHistory();
    // let txt;
    // let username = sessionStorage.getItem("username");
    const [username, setUsername] = useState({ username: sessionStorage.getItem("username"), });
    // const [src, setSrc] = useState("");
    const [favs, setFavs] = useState([""]);
    const [user, setUser] = useState([]);
    const [item, setItem] = useState(false);
    // const [id, setId] = useState("");
    useEffect(() => {
        const showFav = async () => {

            //console.log(username);
            //let res,data;
            setUsername(sessionStorage.getItem("username"));
            axios.post("http://localhost:9002/fetchclients", username)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.length > 0) setFavs(res.data);
                });
        }
        showFav();

    }, []);

    // console.log(user);
    const deleteCard = (pid) => {

        // console.log(user) 
        // console.log(pid) 
        axios.delete(`http://localhost:9002/deleteclient/${pid}`).then(res => {
            toast(res.data.message,{position: toast.POSITION.TOP_LEFT})
            setTimeout(() => {
                window.location.reload(false);
            }, 2000);
            
        })

    }
    // const deleteCard = () =>
    // {
    //     console.log(user);
    //     axios.put("http://localhost:9002/delete",user);
    //     // window.location.reload(false);
    // }
    return (
        <>

            <Mainnavbar />
            <div className="card-container-client">
                {

                    favs.map((curElem) => {
                        return (


                            <div key={uuid()} className="card-client">
                                <b>name:</b> {curElem.name} <br />
                                <b>email:</b> {curElem.email} <br />
                                <b>phone:</b> {curElem.phone} <br />
                                <b>Username:</b> {curElem.username} <br />


                                {/* <img src={src} alt="Qr Code" /> */}
                                <br />
                                <div className="ud" >

                                    {/* <button onClick={() => { setItem(true); setId(curElem._id); setUser(curElem) }}>Update</button> */}
                                    <button onClick={() => { setUser(curElem); deleteCard(curElem._id); }}>Delete</button>

                                </div>
                            </div>
                        )

                    }


                    )

                }

            </div>

        </>
    )
}

export default Clientlist