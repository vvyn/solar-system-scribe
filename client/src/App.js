import './App.css';
import starryBg  from './imgs/starry_bg.png';
import title  from './imgs/title.png';
import loginPlanet  from './imgs/planet1.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'

import Container from 'react-bootstrap/Container';
import Navbar from './pages/NavBar';

import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  if(!token){
    return <Login setToken={setToken}/>
  }

  const handleGoogle = async (event) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );

  return (
    <div>
      <Navbar/>
    <div style={{position: 'relative'}}>
      <img style={{height: '100%', width: '100%'}} src={starryBg} alt="starry background"/>
      <div style={{position: 'absolute', top: '10%', left: '30%', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'white'}}>Solar System Scribe</h1>
      <div>
          <form onSubmit={'#'}>
            <div>
              <label>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
          <a className="App-link" href="/signup">
            <p style={{ fontSize: "12px" }}>create account</p>
          </a>
        </div>

        <div>
        <img src={title}/>
        <div>
          <input type="image" src={loginPlanet} onClick={handleGoogle}/>
        </div>
      </div>
        </div>
    </div>
    </div>

  );
}

export default App;
