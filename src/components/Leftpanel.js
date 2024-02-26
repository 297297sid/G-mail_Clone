import React from "react";
import Pen from "../images/pen.png"
function Leftpanel() {
    return (
        <div style={{backgroundColor:"#F9F9F9",minHeight:"100vh"}}>  
            <div style={{marginLeft:"1vw",width:"12vw",display:"flex" ,alignItems:"center", borderRadius:"20px",backgroundColor:"#c2e7ff"}}>
                <img src={Pen} style={{ width: "1.2vw",marginLeft:"2vw" }} />
                <h4 style={{ marginLeft:"1.6vw",fontWeight:"400" }} > Compose</h4>
            </div>
        </div>
    )
}

export default Leftpanel;