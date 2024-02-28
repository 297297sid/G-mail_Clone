import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Pen from "../images/pen.png";
import TextField from "@mui/material/TextField";
import { collection, addDoc, doc } from "firebase/firestore";
import { database, auth } from "../firebase/Setup";

const style = {
  position: "absolute",
  top: "71%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: "35vw",
  height: "35vw",
  minHeight: "400px",
  bgcolor: "background.paper",

  padding: "1vw",
};

export default function Message() {
  const [open, setOpen] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setMessageSent(false);
  };
  const handleClose = () => setOpen(false);
  const [mailId, setMailId] = React.useState("");
  const [message, setMessage] = React.useState("");

  const send = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Send");
    try {
        await addDoc(messageRef, {
          email:message
        });
      
      setMessageSent(true);
      setTimeout(() => {
        handleClose(); // Close the modal after 5 seconds
      }, 2000); 
    } catch (err) {
      console.error(err);
    }
  };

  const inbox = async () => {
    const userDoc = doc(database, "Users", `${mailId}`);
    const messageRef = collection(userDoc, "Inbox");
    try {
        await addDoc(messageRef, {
          email: message,
          sender:auth.currentUser?.displayName,
        });
      send();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          height: "4.5vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",

            backgroundColor: "#c2e7ff",
        }}
      >
        <img src={Pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <span
          style={{
            fontSize: "1.3vw",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          
          Compose
        </span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              backgroundColor: "#EDF9FF",
              position: "absolute",
              top: "0",
              left: "0",
              width: "36vw",
              padding: "0.5vw",
              fontSize: "1vw",
            }}
          >
            New Message
          </Typography>
          <TextField
            onChange={(e) => setMailId(e.target.value)}
            variant="standard"
            label="To"
            sx={{
              width: "35vw",
              marginTop: "2vw",
            }}
          />
          <br />
          <TextField
            variant="standard"
            label="Subject"
            sx={{ width: "35vw" }}
          />
          <br />
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={8}
            sx={{
              width: "35vw",
              height: "15vw",
              marginBottom: "2vw",
              "& fieldset": { border: "none" },
            }}
          />
          {/* <br /> */}
          {messageSent && ( // Display message sent notification
            <div className="vh">
              <span className="aT">
                <span className="bAq">Message sent.......</span>
                <div
                  tabIndex="0"
                  role="button"
                  className="bBe"
                  onClick={handleClose}
                >
                  <div className="bBf"></div>
                </div>
              </span>
            </div>
          )}
          <br/>

                  <Button
                      onClick={inbox}
            variant="contained"
            sx={{
              borderRadius: "6vw",
              fontSize: "1vw",
              width: "5vw",
              height: "2vw",
              marginTop: "1rem",
            }}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
