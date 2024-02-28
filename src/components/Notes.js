import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Task from "../images/task.png";
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

export default function Notes() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [notes, setNotes] = React.useState("");
  const [notesData, setNotesData] = React.useState([]);

  const addNote = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Notes");
    try {
      await addDoc(messageRef, {
        notes: notes,
      });
        setNotes("");
        console.log("Notes after reset:", notes); 
    } catch (err) {
      console.error(err);
    }
  };
  const showNotes = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Notes");
    try {
      const data = await getDocs(messageRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
        setNotesData(filteredData);
    } catch (err) {
      console.error(err);
    }
    };
    console.log("notes data", notesData);

  return (
    <div>
      <img
        onClick={handleOpen}
        style={{ width: "1.4vw", paddingTop: "2vw" }}
        src={Task}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: "2vw" }}>
            TASKS{" "}
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
            Add Notes...
          </Typography>
                  <input
                       value={notes} 
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add Note here"
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
            onClick={addNote}
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
            onClick={showNotes}
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
                  {notesData.map((data) => {
                      return <>
                          <li style={{marginTop:"0.5vw"}}>{data.notes}</li>
                      
                      </>
                  })}
        </Box>
      </Modal>
    </div>
  );
}
