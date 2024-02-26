import React from "react";
import { Button } from "@mui/material";
import GoogleImage from "../images/google.png"

function Signin(){
    return(
        <div style={{position:"absolute" ,left:"35%",top:"25%"}}>
            <div style={{border:"1px solid grey", padding:"20px",textAlign:"center",borderRadius:"5px"}}>
                <img style={{width:"20%"}}src={GoogleImage}/>
            <h1 style={{fontWeight:"200"}}> Create your Google clone Account</h1>
            <h3 style={{fontWeight:"200"}}>Click the signin button</h3>

            <Button variant="contained">Sign-in with Google</Button>
            </div>



        </div>
    )
}

export default Signin;
