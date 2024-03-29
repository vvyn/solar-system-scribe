import '../../App.css';
import starryBg  from '../../imgs/starry_bg.png';
import title  from '../../imgs/title.png';
import loginPlanet  from '../../imgs/planet1.png';

import Navbar from '../../pages/NavBar';

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export default function Login() {
  var passwordDict = {};

  const handleGoogle = async (event) => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(() => {
      const user = auth.currentUser;
      console.log(passwordDict);
      var newPassword = prompt("enter new password:");

      if (newPassword.length > 5) {
        passwordDict[user.email] = newPassword;
        console.log(passwordDict[user.email]);
        console.log(passwordDict);
      } else {
        alert("Password not long enough");
        var newPassword = prompt("enter new password:");
        passwordDict[user.email] = newPassword;
        console.log(passwordDict);

      }
        });
  }

  function NewPassword() {
    if (auth.currentUser) {
      const user = auth.currentUser;
      console.log(passwordDict);

      var newPassword = prompt("reset password");

      if (newPassword.length > 5) {
        passwordDict[user.email] = newPassword;
        console.log(passwordDict[user.email]);
        console.log(passwordDict);
      } else {
        alert("Password not long enough");
      }
    } else {
      alert("No Account");
    }
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
          <input type="image" style={{marginLeft: '10%'}} src={loginPlanet} onClick={handleGoogle}/>
        </div>
      </div>
        </div>
    </div>
    </div>
  )  
}
