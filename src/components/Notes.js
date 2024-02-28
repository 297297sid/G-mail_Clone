import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Task from "../images/task.png";
import cross from "../images/cross.png";
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
  
    
    const addNote = () => {
        
        
    }
    
    
    
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
        </Box>
      </Modal>
    </div>
  );
}
