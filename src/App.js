import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    setLikeCounter(likeCounter + 1);
  }


  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: bgColor }}>Welcome {uName}</h1> */}
      <h1>Welcome</h1>
      <button onClick={likeClickHandler}>Like 👍</button>
      <div id="likeCounterDisplay">Liked {likeCounter} times !!!</div>
    </div>
  );
}
