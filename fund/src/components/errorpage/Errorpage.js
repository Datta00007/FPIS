import React from 'react'

const Errorpage = () => {
    return (
        <>
            <center style={{ color: "white", padding:"3rem" }}>
                <h1>
                    404 Error
                </h1>
                <h1>OOPS! PAGE NOT FOUND</h1>
                <h5>Sorry, Page you are looking for doesn't exist</h5>
                <h3>
                return to <a href="/" style={{ color: "white", padding:"1rem" }} ><button>Homepage</button></a>
                </h3>
            </center>
        </>
    )
}

export default Errorpage