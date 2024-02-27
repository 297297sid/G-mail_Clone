import { RampRightRounded } from "@mui/icons-material";
import React from "react";
import Calendar from "../images/calendar.png"
import Contact from "../images/contact.png"
import Task from "../images/task.png"
import Keep from "../images/bulb.png"

function Rightpanel(){
    return(<div style={{backgroundColor:"#F9F9F9",minHeight:"100vh",position:"fixed",right:"0",width:"5vw",textAlign:"center",paddingTop:"6vw"}}>
        <img  style={{width:"1.4vw",paddingTop:"2vw"}}src={Calendar}/>
        <br/>
        <img style={{width:"1.4vw",paddingTop:"2vw"}} src={Keep}/>
        <br/>
        <img style={{width:"1.4vw",paddingTop:"2vw"}} src={Task}/>
        <br/>
        <img  style={{width:"1.4vw",paddingTop:"2vw"}} src={Contact}/>
    </div>)
}
export default Rightpanel;