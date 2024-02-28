import React from "react";
import { Button } from "@mui/material";
import GoogleImage from "../images/google.png"
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider,database } from "../firebase/Setup";
import { useNavigate } from "react-router-dom";
import { setDoc,doc } from "firebase/firestore";
function Signin() {
    const navigate = useNavigate();
    
    const addUser = async () => {
        const userDoc=doc(database,"Users",`${auth.currentUser?.email}`)
        try {
            await setDoc(userDoc, {
                username: auth.currentUser?.displayName,
                email: auth.currentUser?.email,
                id: auth.currentUser?.uid,
            });
        } catch (err) {
            console.error(err);
        }
    }
    


    const googleSignin=async()=> {
        try {
            await signInWithPopup(auth, googleProvider)
            addUser()
            navigate("main");
        } catch (err) {
            console.log(err);        }
    }
    return(
        <div style={{position:"absolute" ,left:"25%",padding:"110px"}}>
            <div style={{border:"1px solid grey", padding:"20px",textAlign:"center",borderRadius:"5px",minHeight:"310px",maxWidth:"350px"}}>
                <img style={{width:"20%"}}src={GoogleImage}/>
            <h2 style={{fontWeight:"200"}}> Create your Google clone Account</h2>
            <h3 style={{fontWeight:"200"}}>Click the signin button</h3>

                <Button onClick={googleSignin} variant="contained">Sign-in with Google</Button>
            </div>



        </div>
    )
}

export default Signin;
