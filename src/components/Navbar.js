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

export default function Navbar() {
  return (
      <Grid container>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar elevation={0} position="static" sx={{background:"#F9F9F9",minHeight:"5vw",minWidth:"5vw",paddingTop:"7px" ,paddingRight:"30px"}}>
                  <Toolbar>
                  <Grid item xs={2}>
                          <div style={{display:"flex",alignItems:"center"}}>
                          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "2vw",color:"#3C3C3C" }}
          >
                                  <MenuIcon sx={{ width: "2vw" }} />
                  </IconButton>
                  <img style={{width:"2vw" }} src={GmailLogo}/>
          <Typography sx={{ color:"#3C3C3C",marginLeft:"3vw",fontSize:"1.6vw" }} variant="h6" component="div" >
            GMAIL
          </Typography>
                 </div>
                      </Grid>
                      <Grid item xs={9}>
                          <div style={{marginLeft:"3vw",display:"flex" ,alignItems:"center",borderRadius:"40px",backgroundColor:"#E4EFFA",width:"55vw",height: "3.0vw"}}>
                          <img src={lens} style={{ height: "1.3vw", width: "1.3vw",alignItems:"center" ,marginLeft:"15px"}} />
                          <input placeholder='Search in mail' style={{ marginLeft:"3vw" ,height: "3vw", width: "45vw",backgroundColor:"#E4EFFA", border:"none" }} />
                          
                        </div>
                      
                          
                      </Grid>
                      <Grid item xs={1}>
                          <Avatar sx=
                              {{ marginLeft: "7.5vw",width:"3vw",height:"3vw" }}  src={auth.currentUser?.photoURL} />
                     
                          
                      </Grid>
                      
         
          
        </Toolbar>
      </AppBar>
    </Box>
          
    </Grid>
  );
}