import React from "react";
import Pen from "../images/pen.png"
import Inbox from "../images/inbox.png"
import Snooze from "../images/snooze.png"
import Starred from "../images/stareed.png"
import Sent from "../images/sent.png"
function Leftpanel() {
    return (
        <div style={{backgroundColor:"#F9F9F9",minHeight:"100vh",paddingTop:"1vw"}}>  
            <div style={{marginLeft:"1vw",width:"12vw",display:"flex" ,alignItems:"center", borderRadius:"20px",backgroundColor:"#c2e7ff"}}>
                <img src={Pen} style={{ width: "1.2vw",marginLeft:"2vw" }} />
                <h4 style={{ marginLeft:"1.6vw",fontWeight:"400" ,fontSize:"1.3vw"}} > Compose</h4>
            </div>
            <div style={{marginLeft:"0.8vw",width:"12vw",display:"flex" ,alignItems:"center"}}>
                <img src={Inbox} style={{ width: "1.2vw",marginLeft:"2vw" }} />
                <h4 style={{ marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw" }} > Inbox</h4>
            </div>
            <div style={{marginLeft:"0.8vw",width:"12vw",display:"flex" ,alignItems:"center"}}>
                <img src={Starred} style={{ width: "1.2vw",marginLeft:"2vw" }} />
                <h4 style={{ marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw" }} > Starred</h4>
            </div>
            <div style={{marginLeft:"0.8vw",width:"12vw",display:"flex" ,alignItems:"center"}}>
                <img src={Snooze} style={{ width: "1.2vw",marginLeft:"2vw" }} />
                <h4 style={{ marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw" }} > Snoozed</h4>
            </div>
            <div style={{marginLeft:"0.8vw",width:"12vw",display:"flex" ,alignItems:"center"}}>
                <img src={Sent} style={{ width: "1.2vw",marginLeft:"2vw" }} />
                <h4 style={{ marginLeft:"1.6vw",fontWeight:"400",fontSize:"1.3vw" }} > Sent</h4>
            </div>
        </div>
        
    )
}

export default Leftpanel;