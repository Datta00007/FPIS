import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import './card.css';
// import QRCode from 'qrcode';
import uuid from 'react-uuid';
import { QRCode } from 'react-qr-svg';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Update from './Update';
function Cards() {
    
    const [username, setUsername] = useState({ username: sessionStorage.getItem("username"), });
    // const [src, setSrc] = useState("");
    const [favs, setFavs] = useState([""]);
    // const [user,setUser] = useState([]);
    // const [item, setItem] = useState(false);
    // const [id, setId] = useState("");
    useEffect(() => {
        const showFav =() => {

            //console.log(username);
            //let res,data;
            setUsername(sessionStorage.getItem("username"));
            axios.post("http://localhost:9002/fetchproducts", username)
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
        axios.delete(`http://localhost:9002/delete/${pid}`).then(res => {
            toast.success(res.data.message, {theme: "dark",position: toast.POSITION.TOP_LEFT})
           
             window.location.reload(false);
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
            
            
            <div className="card-container">
                {

                    favs.map((curElem) => {
                        return (


                            <div key={uuid()} className="card">
                                <b>Product:</b> {curElem.name} <br />
                                <b>Category:</b> {curElem.category} <br />
                                <b>Color:</b> {curElem.color} <br />
                                <b>MFG:</b> {curElem.mfg} <br />
                                <b>Expiry:</b> {curElem.expiry} <br />
                                <br />
                                <br />
                                {/* "\n Product id: "+(curElem.pid)+ */}
                                {/* <img src={src} alt="Qr Code" /> */}
                                <QRCode
                                    level="L"
                                    style={{ width: 150 }}
                                    // value={"\n Product id: "+(curElem.pid)+"\n" + (curElem.name) + "\n Compnay:" + (curElem.company) + "\n Color:" + (curElem.color) + "\n MFG:" + (curElem.mfg) + "\n Expiry:" + (curElem.expiry)}
                                    value={(curElem.pid)+"\n" + (curElem.name)}

                                />
                                <br />
                                <br />
                                <div className="ud" >
                                    <center>
                                        {/* <button onClick={() => { setItem(true); setId(curElem._id); setUser(curElem) }}>Update</button> */}
                                        <button onClick={()=>deleteCard(curElem._id)}>Delete</button>
                                    </center>
                                </div>
                            </div>
                        )

                    }


                    )

                }

            </div>
            {/* {(item) ? (
                <Update trigger={item} setTrigger={setItem} product={user} />
                
            ) : ""} */}


        </>
    )
}

export default Cards