import { List, ListItem, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Starred from "../images/stareed.png";
import Refresh from "../images/refresh.png";
import { collection, deleteDoc, setDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { database, auth } from "../firebase/Setup";
import bin from "../images/bin.png";
import yellow from "../images/yellow.png";
import snooze from "../images/snooze.png"
function Middle(props) {
  const [mailData, setMailData] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const deleteMail = async (data) => {
    console.log("Deleting mail:", data);
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Inbox", `${data.id}`);
    const starredDoc = doc(userDoc, "Starred", `${data.id}`);
    const snoozedDoc=doc(userDoc,"Snoozed",`${data.id}`)
    try {
      await deleteDoc(snoozedDoc);
      await deleteDoc(starredDoc);
      await deleteDoc(messageDoc);
      console.log("Document successfully deleted!");
      const updatedMailData = mailData.filter((mail) => mail.id !== data.id);
      setMailData(updatedMailData);
    } catch (err) {
      console.error("Error deleting document:", err);
    }
  };

  const getMail = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = collection(
      userDoc,
      `${props.subCollect ? props.subCollect : "Inbox"}`
    );
    try {
      const data = await getDocs(messageDoc);
      console.log("data:", data);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMailData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const starred = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Starred", `${data.id}`);
    try {
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        starred:"true"
      });
    } catch (err) {
      console.error(err);
    }
  };
  const snoozed = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Snoozed", `${data.id}`);
    const snoozeDoc=doc(userDoc,"Inbox",`${data.id}`)
    try {
      await deleteDoc(snoozeDoc);
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMail();
  }, [props.subCollect]);

  console.log("maildata", mailData);

  return (
    <div style={{ marginLeft: "-0.1vw", width: "75vw", paddingTop: "4vw" }}>
      <img
        src={Refresh}
        style={{
          height: "1.5vw",
          width: "1.5vw",
          marginTop: "2vw",
          marginLeft: "1.5vw",
        }}
      />
      {mailData.map((data) => {
        const isHovered = hoveredId === data.id;
        return (
          <Paper
            key={data.id}
            elevation={0}
            style={{
              backgroundColor: "#f8fcff",
              borderTop: "1px solid lightgrey",
              borderBottom: "1px solid #efefef",
            }}
            onMouseEnter={() => setHoveredId(data.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <ListItem>
              {data.starred ? <img src={yellow}
              style={{ cursor:"pointer",width: "2vw", height: "1.4vw" }}/> :
              <img
              onClick={() => starred(data)}
              src={Starred}
              style={{cursor:"pointer", width: "2vw", height: "1.4vw" }}
            />}
              <span style={{ marginLeft: "1.2vw", fontWeight: "500" }}>
                {data.sender}
                <span
                  style={{
                    marginLeft: "12vw",
                    fontWeight: "200",
                    marginLeft: "1vw",
                    cursor: "pointer",
                  }}
                >
                  {data.email}
                </span>
              </span>
              {isHovered && (
                <div>
                    <img
                  onClick={() => snoozed(data)}
                  src={snooze}
                  style={{ cursor:"pointer",marginLeft:"1vw",width: "1.2vw", height: "1.4vw", cursor: "pointer" }}
                />
                <img
                  onClick={() => deleteMail(data)}
                  src={bin}
                  style={{ width: "2.9vw", height: "2vw", cursor: "pointer" }}
                />
                </div>
              )}
            </ListItem>
          </Paper>
        );
      })}
      <h6 style={{ fontWeight: "500", marginLeft: "20vw" }}>
        Terms · Privacy · Program Policies
      </h6>
    </div>
  );
}

export default Middle;
