import React, { useState } from "react";
import Pen from "../images/pen.png";
import Inbox from "../images/inbox.png";
import Snooze from "../images/snooze.png";
import Starred from "../images/stareed.png";
import Sent from "../images/sent.png";
import Message from "./Message";
function Leftpanel(props) {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        paddingTop: "6vw",
        width: "17vw",
      }}
    >
      <Message />
      <div
        style={{
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Inbox} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          onClick={() => props.setSubCollect("Inbox")}
          style={{
            cursor: "pointer",
            fontSize: "1.3vw",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Starred} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          onClick={() => props.setSubCollect("Starred")}
          style={{
            cursor: "pointer",
            fontSize: "1.3vw",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Snooze} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
           onClick={() => props.setSubCollect("Snoozed")}
          style={{
            cursor: "pointer",
            fontSize: "1.3vw",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Sent} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          onClick={() => props.setSubCollect("Send")}
          style={{
            cursor: "pointer",
            fontSize: "1.3vw",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Sent
        </span>
      </div>
    </div>
  );
}

export default Leftpanel;
