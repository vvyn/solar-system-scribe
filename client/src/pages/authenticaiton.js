import '../App.css';
import starryBg  from '../imgs/starry_bg.png';
import title  from '../imgs/title.png';
import loginPlanet  from '../imgs/planet1.png';
import planet2  from '../imgs/planet2.png';
import planet3  from '../imgs/planet3.png';

import Navbar from '../pages/NavBar';
//import deletePlanet  from './planet2.png';

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Login() {
  var passwordDict = {};

  function DeleteUser() {

      if (auth.currentUser) {

        const user = auth.currentUser;

        console.log(passwordDict);

        var uPassword = prompt("enter password");

        if (uPassword === passwordDict[user.email]) {
          user.delete()
          .then(() => {
              // User deleted.
              alert(user.email);
              console.log("User Account Deleted Successful");
              alert("User Account Deleted Successful");
          })
          .catch((error) => {
          console.log(error)
              // An error occurred
              // ...
              alert("No Account to Delete");
          });
        } else {
          alert("Error wrong password");
        }
      } else {
          alert("No Account to Delete");
      }
  }

  function ResetPassword() {
    if (auth.currentUser) {
      const user = auth.currentUser;
      console.log(passwordDict);

      var newPassword = prompt("reset password");

      if (newPassword.length > 5) {
        passwordDict[user.email] = newPassword;
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
          <div onClick={ResetPassword}>
            <img type="image" style={{marginLeft: '10%'}} src={planet3}/>
          </div>
          <div onClick={DeleteUser}>
            <img type="image" style={{marginLeft: '10%'}} src={planet2}/>
          </div>
        </div>
      </div>
        </div>
    </div>
    </div>
  )  
}
