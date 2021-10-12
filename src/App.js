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
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  var [item, setItem] = useState("");

  function inputHandler(event) {
    var usrInput = event.target.value;

    setMeaning(emojiDictionary[usrInput]);

    if (emojiDictionary[usrInput] === undefined) {
      setMeaning("Sorry, we don't have this emoji in our database. :(");
    }
    if (usrInput === "") {
      setMeaning("");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return ( 
    <div className = "App">
    <h1>Emoji Interpreter ✨</h1>
    <h3 style={{color: 'orange'}}>Enter an emoji below and get its meaning 👇</h3>
    <input onChange = { inputHandler }/>
    <h3>{ meaning } </h3> 
    <h4> Emojis we know </h4>
    {
      // Method - 1
      // <span>{emojisWeKnow}</span>

      // Method - 2 - using <span>
      // emojisWeKnow.map(function (emoji) {
      //   return <span 
      //   key = {emoji}
      //   onClick = { () => emojiClickHandler(emoji) }
      //   style = { { padding: '1rem', fontSize: '2rem', cursor: 'pointer' } }
      //   >
      //      { emoji } </span>
      // })

      // Method - 3 - using <ol> and <li> tags
      <ol>
      {
        emojisWeKnow.map(function (emoji) {
          return <li
          key = {emoji}
          onClick = { () => emojiClickHandler(emoji) }
          style = { { padding: '1rem', fontSize: '2rem', cursor: 'pointer' } }
          >
            { emoji } </li>
        })
      }
      </ol>
    } 
    </div>
  );
}