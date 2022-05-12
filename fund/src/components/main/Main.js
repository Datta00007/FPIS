import React, { useState } from 'react'
import Mainnavbar from './Mainnavbar';
import Product from './Product';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cards from './Cards';
const Main = () => {
    // console.log(setLoginUser);
    const history = useHistory();
    const [item, setItem] = useState(false)
    useEffect(() => {
        const checkSession = async () => {
          const email = await sessionStorage.getItem("username");
          // console.log(email);
          if (!email) {
            // console.log("Hello invalid");
            history.push("/clogin");
          }
        }
        checkSession();
      }, [])
    return (
        <>
            <Mainnavbar />
            <center>
                <h1 style={{ color: "white" }}>Welcome {sessionStorage.getItem("name")}</h1>
                <br />
                <span className="add-product">
                    {/* <label htmlFor="button">➕</label> */}
                    <button className="add-product-button" onClick={() => setItem(true)}>Add Product</button>
                </span>
            </center>
            <div className="product-container">

            </div>
            <Product trigger={item} setTrigger={setItem} />
            <Cards />
            <br />
            <br />
            <br />
            <br />

        </>
    )
}

export default Main;