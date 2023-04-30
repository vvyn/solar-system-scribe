import '../App.css';
import starryBg  from '../imgs/starry_bg.png';
import title  from '../imgs/title.png';
import loginPlanet  from '../imgs/planet1.png';
import Navbar from '../pages/NavBar';

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Login() {
  function DeleteUser() {
      const user = auth.currentUser;
   
      user.delete()
          .then(() => {
              // User deleted.
              console.log("User Account Deleted Successful");
          })
          .catch((error) => {
          console.log(error)
              // An error occurred
              // ...
          });
  }
  const handleGoogle = async (event) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  return(
    <div>
      <Navbar/>
    <div style={{position: 'relative'}}>
      <img style={{height: '100%', width: '100%'}} src={starryBg} alt="starry background"/>
      <div style={{position: 'absolute', top: '10%', left: '30%', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <div>
        <img src={title}/>
        <div>
          <button onClick={DeleteUser}>delete account </button>
        </div>
      </div>
        </div>
    </div>
    </div>
  )  
}
