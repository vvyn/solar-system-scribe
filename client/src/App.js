import './App.css';
import starryBg  from './imgs/starry_bg.png';
import title  from './imgs/title.png';
import loginPlanet  from './imgs/planet1.png';
import registerPlanet  from './imgs/planet2.png';

import Container from 'react-bootstrap/Container';
import Navbar from './pages/NavBar';

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <img src={loginPlanet}/>
          <img src={registerPlanet}/>
        </div>

      </div>

        </div>


    </div>





    </div>

  );
}

export default App;
