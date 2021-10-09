import React, { useState } from "react";
import "./styles.css";

// var bgColor = "skyblue";
// var uName = prompt("Enter username");

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    // var newLikeCounter = likeCounter + 1;
    // setLikeCounter(newLikeCounter);
    setLikeCounter(likeCounter + 1);
  }

  // This is being put in console from view and not from the onClickHandler callback function
  console.log("LikeCounter: ", likeCounter);

  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: bgColor }}>Welcome {uName}</h1> */}
      <h1>Welcome</h1>
      <div id="likeCounterDisplay">Liked {likeCounter} times !!!</div>
      <button onClick={likeClickHandler}>Like 👍</button>
    </div>
  );
}
