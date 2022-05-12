import React,{useState} from 'react'
import axios from 'axios';

function Update(props) {
    // console.log(props.product);
    let vid = props.product._id;
    const [user, setUser] = useState({
        id:props.product._id,
        name: props.product.name,
        username: sessionStorage.getItem("username"),
        company: sessionStorage.getItem("name"),
        category: props.product.category,
        color: props.product.color,
        address: sessionStorage.getItem("address"),
        mfg: props.product.mfg,
        expiry: props.product.expiry,
    })
    // console.log(user);

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const update = (element) => {
        element.id = vid;
        // console.log(element)
        axios.put("http://localhost:9002/update", element).then(res => {
            alert(res.data.message)
           
            window.location.reload(false);
        })

    }
  return  (props.trigger) ?(
    <center>
                                <div className='popup-product'>
                                    <div className="popup-cross">
                                        <span className='close-btn' onClick={() => props.setTrigger(false)}> ❌ </span>
                                        {props.children}
                                    </div>
                                    <div className='product-form'>
                                        <center >

                                            <h1 style={{ color: "white", padding: "3rem" }}>Edit Product Details</h1>

                                            <div className=" product-content__input">

                                                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder={"Name: "+props.product.name} autoComplete='off' />
                                                <br />
                                                <br />

                                              
                                                <input type="text" name="category" value={user.category} onChange={handleChange} placeholder={"Category: "+props.product.category} autoComplete='off' />
                                                <br />
                                                <br />

                                                <input type="text" name="color" value={user.color} onChange={handleChange} placeholder={"color: "+props.product.color} autoComplete='off' />
                                                <br />
                                                <br />

                                               

                                                <input type="text" name="mfg" value={user.mfg} onChange={handleChange} placeholder={"MFG: "+props.product.mfg} onFocus={
                                                    (e) => {
                                                        e.currentTarget.type = "date";
                                                        e.currentTarget.focus();
                                                    }
                                                } autoComplete='off' />
                                                <br />
                                                <br />

                                                <input type="text" id="expiry" name="expiry" value={user.expiry}  onChange={handleChange} placeholder={"EXP: "+props.product.expiry} onFocus={
                                                    (e) => {
                                                        e.currentTarget.type = "date";
                                                        

                                                    }
                                                } autoComplete='off' />
                                                <br />
                                                <br />

                                                <button type="button" onClick={()=> update(user)}>Add</button>

                                            </div>
                                        </center>
                                    </div>

                                </div>
                                <br />
                                <br />
                                <br />
                            </center>
    ):"";
                            
  
}

export default Update