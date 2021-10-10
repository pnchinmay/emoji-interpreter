import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "🤗": "Hugging Face",
  "😅": "Grinning Face with Sweat",
  "😉": "Winking face",
  "🤩": "Star-Struck",
  "😇": "Smiling Face with Halo",
  "😬": "Grimancing Face",
  "😛": "Face with Tongue",
  "😒": "Unamused Face",
  "😵": "Dizzy Face"
};

export default function App() {

  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {}
  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={inputHandler}></input>
      <div>Meaning: {} </div>
    </div>
  );
}
