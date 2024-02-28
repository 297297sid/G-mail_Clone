import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Contact from "../images/contact.png";
import cross from "../images/cross.png";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { database, auth } from "../firebase/Setup";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '92%',
  transform: 'translate(-50%, -50%)',
    width: "14vw",
  minHeight:"650px",
  bgcolor: 'background.paper',
  
  padding: "1vw",
};

export default function Contacts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [contactData, setContactData] = React.useState([]);

  const addContact = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Contact");
    try {
      await addDoc(messageRef, {
        name: name,
        mobile: mobile,
      });
      setName("");
      setMobile("");
    } catch (err) {
      console.error(err);
    }
  };
  const showContact = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageRef = collection(userDoc, "Contact");
    try {
      const data = await getDocs(messageRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setContactData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };


  return (
      <div>
     <img  onClick={handleOpen} style={{width:"1.4vw",paddingTop:"2vw"}} src={Contact}/>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{fontSize:"2vw",}} >
                      Contacts 
                      <img
                  onClick={handleClose}
                  src={cross}
                  style={{ marginLeft:"4vw",width: "1.5vw", height: "1.5vw", cursor: "pointer" }}
                  />
                  </Typography>
                  <Typography sx={{paddingTop:"0.5vw",fontSize:"1vw",color:"grey"}} >
            Add Contact...
                  </Typography>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ outline: "none", fontSize: "1vw", width: "11vw", height: "1.5vw", marginTop: "0.5vw", border: "1px solid #000", }} />
                  <input placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} style={{marginTop:"1vw",outline:"none",fontSize:"1vw",width:"11vw",height:"1.5vw" ,marginTop:"0.5vw",border: "1px solid #000",}} />
                  <Button onClick={addContact} variant="contained" sx={{ fontSize: "1vw", height: "2vw", width: "4vw", marginTop: "1vw", marginRight: "1vw" }}>Add</Button>
          <Button onClick={showContact} variant="contained" sx={{ fontSize: "1vw", height: "2vw", width: "4vw" ,marginTop:"1vw"}}>Show</Button>
          <br />
          {contactData.map((data) => {
                      return <>
                        <li style={{ marginTop: "0.5vw" }}>{data.name} <span>-{data.mobile}</span></li>
                      
                      </>
                  })}
        </Box>
      </Modal>
    </div>
  );
}
