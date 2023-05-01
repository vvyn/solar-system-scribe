//Password Set and Reset Function
//Initialize Firestore
import '../../App.css';
import starryBg  from '../../imgs/starry_bg.png';
import title  from '../../imgs/title.png';
import loginPlanet  from '../../imgs/planet1.png';

import Navbar from './NavBar';

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Password() {
  const handleGoogle = async (event) => {
    const Firestore = require('@google-cloud/firestore');

        const db = new Firestore({
            projectId: 'majestic-stage-385322',
            keyFilename: '/user/credentials',
        });
        //Check whether it's set or reset
        const prompt = require('prompt-sync')();
        const response = prompt('Enter 1 to reset password');
        if(response === "1")
        {
            const email = prompt('Enter Email Address');
            const password = prompt('Enter New Password');
            const change = db.collection('credentials').doc(email);
            const res = await change.update({password: password});
        }
        else
        {
            const email = prompt('Enter Email Address');
            const password = prompt('Enter New Password');
            //Add user to database
            const data = {
            email: email,
            password: password
            };
            const res = await db.collection('credentials').doc(email).set(data);
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
