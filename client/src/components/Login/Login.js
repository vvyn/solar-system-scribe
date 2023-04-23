import '../../App.css';
import starryBg  from '../../imgs/starry_bg.png';
import title  from '../../imgs/title.png';
import loginPlanet  from '../../imgs/planet1.png';

import Navbar from '../..//pages/NavBar';

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

export default function Login() {
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
          <input type="image" src={loginPlanet} onClick={handleGoogle}/>
        </div>
      </div>
        </div>
    </div>
    </div>
  )  
}
