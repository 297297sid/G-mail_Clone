import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GmailLogo  from "../images/gmaillogo.png";
import { Avatar, Grid } from '@mui/material';
import lens from "../images/lens.png";
import { auth } from '../firebase/Setup';
import Profile from './Profile';

export default function Navbar({ setSearch }) {
  return (
      <Grid container>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar elevation={0} position="static" sx={{position:"fixed",top:"0",zIndex:"2",background:"#F9F9F9",minHeight:"5vw",minWidth:"5vw",paddingTop:"7px" ,paddingRight:"30px"}}>
                  <div style={{display:"flex",alignItems:"center"}}>
                  <Grid item xs={2}>
                          <div style={{display:"flex",alignItems:"center"}}>
                          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "0.3vw",color:"#3C3C3C" }}
          >
                                  <MenuIcon sx={{ width: "2vw" }} />
                  </IconButton>
                  <img style={{width:"2.3vw" }} src={GmailLogo}/>
          <Typography sx={{ color:"#3C3C3C",marginLeft:"1.3vw",fontSize:"1.8vw" }} variant="h6" component="div" >
            GMAIL
          </Typography>
                 </div>
                      </Grid>
                      <Grid item xs={9}>
                          <div style={{marginLeft:"3vw",display:"flex" ,alignItems:"center",borderRadius:"40px",backgroundColor:"#E4EFFA",width:"55vw",height: "3.0vw"}}>
                          <img src={lens} style={{ height: "1.3vw", width: "1.3vw",alignItems:"center" ,marginLeft:"15px"}} />
                <input onChange={(e) => setSearch(e.target.value)} placeholder='Search in mail' style={{ marginLeft:"3vw" ,height: "2.8vw", width: "45vw",backgroundColor:"#E4EFFA", border:"none" ,outline:"none"}} />
                          
                        </div>
                      
                          
                      </Grid>
                      <Grid item xs={1}>
                          {/* <Avatar sx=
                              {{ marginLeft: "13.5vw",width:"2.7vw",height:"2.7vw" }}  src={auth.currentUser?.photoURL} />
                      */}
                      <Profile/>
                          
                      </Grid>
                      
         
          
                      </div>
      </AppBar>
    </Box>
          
    </Grid>
  );
}