import { List, ListItem, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Starred from "../images/stareed.png";
import Refresh from "../images/refresh.png";
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { database, auth } from "../firebase/Setup";
import bin from "../images/bin.png";

function Middle(props) {
  const [mailData, setMailData] = useState([]);

  //     const deleteMail = async (data) => {
  //         console.log("Deleting mail:", data);
  //     const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
  //     const messageDoc = doc(userDoc, "Inbox", `${data.id}`);
  //     try {
  //       await deleteDoc(messageDoc);
  //         console.log("Document successfully deleted!");
  //     //     const updatedMailData = mailData.filter((mail) => mail.id !== data.id);
  //     // setMailData(updatedMailData); // Update the mailData state
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const deleteMail = async (data) => {
    console.log("Deleting mail:", data);
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Inbox", `${data.id}`);
    try {
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
  useEffect(() => {
    getMail();
  }, [props.subCollect]);

  console.log("maildata", mailData);
  return (
    <div style={{ marginLeft: "-0.1vw", width: "75vw", paddingTop: "6vw" }}>
      <img
        src={Refresh}
        style={{
          height: "1.5vw",
          width: "1.5vw",
          marginTop: "2vw",
          marginLeft: "1.5vw",
        }}
      />
      {props.search
        ? mailData
            .filter((data) => data.sender == props.search)
            .map((data) => {
              return (
                <>
                  <Paper
                    elevation={0}
                    style={{
                      backgroundColor: "#f8fcff",
                      borderTop: "1px solid lightgrey",
                      borderBottom: "1px solid #efefef",
                      //   marginTop: "1.5vw",
                    }}
                  >
                    <ListItem>
                      <img
                        src={Starred}
                        style={{ width: "2vw", height: "1.4vw" }}
                      />
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
                      <img
                        onClick={() => deleteMail(data)}
                        src={bin}
                        style={{ width: "1.5vw", height: "1.5vw" }}
                      />
                    </ListItem>
                  </Paper>
                </>
              );
            })
        : mailData.map((data) => {
            return (
              <>
                <Paper
                  elevation={0}
                  style={{
                    backgroundColor: "#f8fcff",
                    borderTop: "1px solid lightgrey",
                    borderBottom: "1px solid #efefef",
                    //   marginTop: "1.5vw",
                  }}
                >
                  <ListItem>
                    <img
                      src={Starred}
                      style={{ width: "2vw", height: "1.4vw" }}
                    />
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
                    <img
                      onClick={() => deleteMail(data)}
                      src={bin}
                      style={{ width: "1.5vw", height: "1.5vw" }}
                    />
                  </ListItem>
                </Paper>
              </>
            );
          })}

      <h6 style={{ fontWeight: "500", marginLeft: "20vw" }}>
        Terms · Privacy · Program Policies
      </h6>
    </div>
  );
}
export default Middle;
