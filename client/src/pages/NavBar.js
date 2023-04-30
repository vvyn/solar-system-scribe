import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="allBtns">
      <a href="/">
          <button className="home">SOLAR SYSTEM SCRIBE</button>
        </a>
        <a href="/game">
          <button className="btn">Home</button>
        </a>
        <a href="/levels">
          <button className="btn">Levels</button>
        </a>
        <a href="/rules">
          <button className="btn">How to Play</button>
        </a>
        <a href="/badges">
          <button className="btn">Badges</button>
        </a>
        <a href="/leaderboard">
          <button className="btn">Leaderboard</button>
        </a>
        <a href="/authenticaiton">
          <button className="account">Account</button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;