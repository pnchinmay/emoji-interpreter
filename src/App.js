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


var shoppingList = ["milk", "eggs", "bread", "flowers"];

var username = "cm";
var loggedIn = true;


export default function App() {
  // var [emoji, setEmoji] = useState("");
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
    // console.log(emoji);
    setMeaning(emojiDictionary[emoji]);
  }

  function userMessage() {
    if (username === "cm" && loggedIn === true) {
      return <em > { username } </em>;
    }
    return "user";
  }

  function indexStyle(index) {
    if(index % 2 === 0) { 
      return { backgroundColor: 'red', fontSize: '2rem', cursor: 'pointer' };
    } return { backgroundColor: 'yellow', cursor: 'pointer' };
  }

  function listItemHandler(item) {
    setItem(item);
  }


  return ( 
    <div className = "App">
    <h1> Lists </h1> 
    <input onChange = { inputHandler }/>
    <h3> Meaning: { meaning } </h3> 
    <ol> {
      shoppingList.map(function (item, index) {
        // Arrow function in map takes these three kinds of arguments
        // map((element) => { ... })
        // map((element, index) => { ... })
        // map((element, index, array) => { ... })
        return <li 
        key = { item }
        onClick = { () => listItemHandler(item) }
        style = { indexStyle(index) }> { item } </li>
        // Removed error "Each child in a list should have a unique key property"

      })
    } </ol>

    <h3> Welcome { userMessage() } </h3> 
    <h4> hello, you clicked { item } </h4> 
    <h3> Emojis we know </h3>
    {
      // Method - 1
      // <span>{emojisWeKnow}</span>

      // Method - 2
      // emojisWeKnow.map(function (emoji) {
      //   return <span 
      //   key = {emoji}
      //   onClick = { () => emojiClickHandler(emoji) }
      //   style = { { padding: '1rem', fontSize: '2rem', cursor: 'pointer' } }
      //   >
      //      { emoji } </span>
      // })

      // Method - 3
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