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

var shoppingList = ["milk", "eggs", "bread", "flowers"];

export default function App() {
  // var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

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

  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={inputHandler}></input>
      <div>Meaning: {meaning} </div>
      <ol>
        {
          shoppingList.map(item => {
            return <li> {item} </li>
          })
        }
      </ol>
    </div>
  );
}
