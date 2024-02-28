import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import keep from "../images/bulb.png";
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

export default function Keep() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img
        onClick={handleOpen}
        style={{ width: "1.4vw", paddingTop: "2vw" }}
        src={keep}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: "2vw" }}>
            Keep
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
            Notes...
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: "1vw",
              height: "2vw",
              width: "14vw",
              marginTop: "1vw",
            }}
          >
            + Take a note....
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
