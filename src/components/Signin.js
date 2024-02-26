import React from "react";
import { Button } from "@mui/material";

function Signin(){
    return(
        <div style={{position:"absolute" ,left:"35%",top:"40%"}}>
            <div style={{border:"1px solid grey", padding:"20px",textAlign:"center"}}>
            <h1 style={{fontWeight:"200"}}> Create your Google clone Account</h1>
            <h3 style={{fontWeight:"200"}}>Click the signin button</h3>

            <Button variant="contained">Sign-in with Google</Button>
            </div>



        </div>
    )
}

export default Signin;
