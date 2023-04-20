import React from "react";

function NavBar() {
  return (
    <div>
      <div>
      <a href="/">
          <button>Home</button>
        </a>
        <a href="/login">
          <button>Login</button>
        </a>
        <a href="/registration">
          <button>Register</button>
        </a>
        <a href="/authenticaiton">
          <button>Authenticaiton</button>
        </a>
        <a href="/badges">
          <button>Badges</button>
        </a>
        <a href="/game">
          <button>Game</button>
        </a>
        <a href="/leaderboard">
          <button>Leaderboard</button>
        </a>
        <a href="/levels">
          <button>Levels</button>
        </a>
        <a href="/rules">
          <button>Rules</button>
        </a>
        
      </div>
    </div>
  );
}

export default NavBar;