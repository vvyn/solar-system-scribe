import './../App.css';
import starryBg  from './../imgs/starry_bg.png';
import title  from './../imgs/title.png';
// import { useState, useSyncExternalStore } from "react";
import Navbar from './NavBar';
//import { useState, useEffect } from 'react';
import { useState, useEffect, useRef } from "react";

const words = [
  "apple", "banana", "cat", "dog", "elephant", "fish", "grape", "house", "jungle",
  "kiwi", "lion", "monkey", "nest", "orange", "parrot", "queen", "rabbit", "snake", "tiger",
  "umbrella", "violin", "whale", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "yacht", "zebra", "ant", "bird", "car", "desk",
  "egg", "flower", "guitar", "hat", "island", "jacket", "key", "lemon", "mango", "nose",
  "ocean", "pencil", "quilt", "rainbow", "sun", "tree", "unicorn", "volcano", "watermelon", "astronaut", "galaxy", "universe", "planet", "moon", "sun", "star", "quasar", "nebula",
  "cosmic", "astroid", "comet", "constellation", "solar", "radiation"
];

const TypingGame = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [typedWord, setTypedWord] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [wpm, setWPM] = useState(0);
  const [startedTyping, setStartedTyping] = useState(false)
  const inputRef = useRef(null);

  const restartGame = () => {
    setTypedWord("");
    setScore(0);
    setTime(15);
    setWPM(0);
    setStartedTyping(false);
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  };

  useEffect(() => {
    inputRef.current.focus();
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    if (time > 0 && startedTyping) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      calculateWPM();
    }
  }, [time, startedTyping]);

  useEffect(() => {
    if (currentWord === typedWord) {
      setScore((prevScore) => prevScore + 1);
      setTypedWord("");
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }
  }, [typedWord, currentWord]);

  const handleInput = (event) => {
    setTypedWord(event.target.value);
    setStartedTyping(true)
  };

  const calculateWPM = () => {
    const minutes = 15/60.0;
    const wpm = score / minutes;
    setWPM(wpm);
  };

  return (
    <>
      <Navbar/>
      <img style={{height: '100%', width: '100%', position: 'fixed', zIndex: -1}} src={starryBg} alt="starry background"/>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '40vh', marginTop: '100px'}}>
        <h1 style={{color: 'white', height:'10vh'}}>Solar System Scribe</h1>
        <h2 style={{color: 'white'}}>Words Typed: {score}</h2>
        <h2 style={{color: 'white'}}>Time: {time}</h2>

        {time === 0 ? (
          <>
            <h2 style={{color: 'white'}}>Game Over!</h2>
            <h2 style={{color: 'white'}}>Words Per Minute (WPM): {wpm}</h2>
          </>
        ) : (
        <>
          <h2 style={{color: 'white'}}>Current Word: {currentWord}</h2> 
          <input ref={inputRef} value={typedWord} onChange={handleInput}/>
        </>
        )}
        <h2 style={{color: 'white'}}><button onClick={restartGame}>Restart</button></h2>
      </div>
    </>
  );
};

export default TypingGame;