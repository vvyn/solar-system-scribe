import './../App.css';
import rules  from './../imgs/rules.png';
import title  from './../imgs/title.png';
import { useState } from "react";
import Navbar from './NavBar';

function App() {
  
  return (
    <div style={{position: 'relative'}}>
    <Navbar/>
      <img style={{height: '100%', width: '100%'}} src={rules} alt="starry background"/>
    </div>
  );
}

export default App;
