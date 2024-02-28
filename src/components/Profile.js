import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar} from '@mui/material';
import { auth } from '../firebase/Setup';
import Logout from "../images/logout.png";
import {signOut} from "firebase/auth";
import {  googleProvider } from "../firebase/Setup";
import { useNavigate } from 'react-router-dom';

const style = {
  cursor:"pointer",
  position: 'absolute',
  top: '34%',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  width: "27vw",
  height: "17vw",
  bgcolor: "#d8e0f4",
//   border: '2px solid #000',
  boxShadow: 24,
  borderRadius:"4vw",borderRadiys:"4vw",
  p: 4,
  borderRadiys:"4vw",
  padding:"2vw",
};

export default function Profile() {
    const navigate=useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logOut= async()=>{
   
    try{
        await signOut(auth,googleProvider);
        auth.currentUser===null&& navigate("/")

    }catch(err){
        console.error(err);

    }

  }
//   console.log("Photo URL:", auth.currentUser?.photoURL);
  return (

    <div>
        
        {auth.currentUser?.photoURL ? ( // Check if photoURL exists
        <Avatar
          onClick={handleOpen}
          sx={{ position:"fixed",left:"96%",top:"2%", width: "2.7vw", height: "2.7vw" ,cursor:"pointer"}}
        //   sx={{ marginLeft: "13.5vw", width: "2vw", height: "2vw" }}
          src={auth.currentUser?.photoURL}
        />
      ) : (
        <div>No Avatar Available</div> // Display a message if photoURL is not available
      )}
                     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{textAlign:"center",fontSize:"0.7vw"}}>
           {auth.currentUser?.email}
          </Typography>
          <Avatar src={auth.currentUser?.photoURL} style={{marginLeft:"12.9vw",height:"5vw",width:"5vw"}}/>
          <Typography style={{textAlign:"center",fontSize:"1.4vw"}}>
            Hii,{auth.currentUser?.displayName}!
          </Typography>
           <button onClick={logOut} style={{cursor:"pointer",fontSize:"1vw", border:"1px solid white",borderRadius:"2vw",marginTop:"2vw",height:"4vw",width:"14vw",marginLeft:"8vw"}}><img  style={{width:"0.8vw"}} src={Logout}/>Signout</button>
           <Typography style={{fontSize:"0.8vw",fontWeight:"100",textAlign:"center",marginTop:"1vw",marginLeft:"2.8vw"}}> Privacy Policy Terms of Service</Typography>
        </Box>
      </Modal>
    </div>
  );
}
