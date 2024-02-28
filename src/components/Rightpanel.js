import { RampRightRounded } from "@mui/icons-material";
import React from "react";
import Notes from "../components/Notes"
import Contacts from "./Contacts";
import Events from "./Events";
import Keep from "../components/Keep"


function Rightpanel(){
    return(<div style={{cursor:"pointer",backgroundColor:"#F9F9F9",minHeight:"100vh",position:"fixed",right:"0",width:"5vw",textAlign:"center",paddingTop:"6vw"}}>
       <Events/>
        {/* <br/>
        <Keep/> */}
        <br/>
        <Notes/>
        <br/>
        <Contacts/>
        
   
    </div>)
}
export default Rightpanel;