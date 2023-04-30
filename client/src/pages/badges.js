import './../App.css';
import starryBg  from './../imgs/starry_bg.png';
import title  from './../imgs/title.png';
import { useState } from "react";
import Navbar from './NavBar';
import badges  from './../imgs/gameBg.png';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{position: 'relative'}}>
    <Navbar/>
      <img style={{height: '100%', width: '100%'}} src={badges} alt="starry background"/>
    </div>
  );
}

export default App;
