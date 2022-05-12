import React from 'react'
import './/profile.css'
function Profile(props) {
  return (props.trigger)?(
    <div className='popup-profile'>
        <div className="popup-inner">
            <span className='close-btn' onClick={() => props.setTrigger(false)}> ❌ </span>
            {props.children}
        </div>
        <div>
            <p><b>Company:</b> {sessionStorage.getItem("name")}</p>            
            <p><b>Username:</b> {sessionStorage.getItem("username")}</p>            
            <p><b>Mail ID:</b> {sessionStorage.getItem("email")}</p>          
            <p><b>Contact No: </b>{sessionStorage.getItem("phone")}</p>         
            <p><b>Address:</b> {sessionStorage.getItem("address")}</p>
            

        </div>
    </div>
  ):"";
}

export default Profile