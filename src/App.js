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

var username = "cm";
var loggedIn = true;

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


  function userMessage() {
    if(username === "cm" && loggedIn === true) {
      return <em> {user} </em>;
    }
    return "user";

  }

  return (
    <div className="App">
      <h1>Lists</h1>
      <input onChange={inputHandler}></input>
      <div>Meaning: {meaning} </div>
      <ol>
        {
          shoppingList.map(function(item){
              return <li> {item} </li>
          })
        }
      </ol>
      <h3>Welcome {userMessage()}</h3>
    </div>
  );
}
