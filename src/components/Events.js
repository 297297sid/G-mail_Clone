import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Event from "../images/calendar.png";
import cross from "../images/cross.png";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { database, auth } from "../firebase/Setup";
const style = {
  position: "absolute",
  top: "50%",
  left: "92%",
  transform: "translate(-50%, -50%)",
  width: "14vw",
  minHeight: "650px",
  bgcolor: "background.paper",

  padding: "1vw",
};

export default function Events() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [event, setEvent] = React.useState("");
  const [date, setDate] = React.useState("");
  const [eventData, setEventData] = React.useState([]);

  const addEvent = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Event");
    try {
      await addDoc(messageRef, {
        event: event,
        date: date,
      });
      setEvent("");
      setDate("");
    } catch (err) {
      console.error(err);
    }
  };
  const showEvent = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Event");
    try {
      const data = await getDocs(messageRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEventData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <img
        onClick={handleOpen}
        style={{ width: "1.4vw", paddingTop: "2vw" }}
        src={Event}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: "2vw" }}>
            Events{" "}
            <img
              onClick={handleClose}
              src={cross}
              style={{
                marginLeft: "4vw",
                width: "1.5vw",
                height: "1.5vw",
                cursor: "pointer",
              }}
            />
          </Typography>
          <Typography
            sx={{ paddingTop: "0.5vw", fontSize: "1vw", color: "grey" }}
          >
            Add Event...
          </Typography>

          <br />
          <input
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            placeholder="Event"
            style={{
              outline: "none",
              fontSize: "1vw",
              width: "11vw",
              height: "1.5vw",
              marginTop: "0.5vw",
              border: "1px solid #000",
            }}
          />
          <input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Notes"
            style={{
              outline: "none",
              fontSize: "1vw",
              width: "11vw",
              height: "1.5vw",
              marginTop: "0.5vw",
              border: "1px solid #000",
            }}
          />
          <Button
            onClick={addEvent}
            variant="contained"
            sx={{
              fontSize: "1vw",
              height: "2vw",
              width: "4vw",
              marginTop: "1vw",
              marginRight: "1vw",
            }}
          >
            Add
          </Button>
          <Button
            onClick={showEvent}
            variant="contained"
            sx={{
              fontSize: "1vw",
              height: "2vw",
              width: "4vw",
              marginTop: "1vw",
            }}
          >
            Show
          </Button>
          <br />
          {eventData.map((data) => {
                      return <>
                        <li style={{ marginTop: "0.5vw" }}>{data.event} <span>-{data.date}</span></li>
                      
                      </>
                  })}
        </Box>
      </Modal>
    </div>
  );
}
