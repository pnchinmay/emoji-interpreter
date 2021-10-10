import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [usrInput, setUsrInput] = useState("");
  function inputHandler(event) {
    setUsrInput(event.target.value);
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={inputHandler}></input>
      <div>Welcome {usrInput} </div>
    </div>
  );
}
