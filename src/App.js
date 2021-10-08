import "./styles.css";

var bgColor = "skyblue";
var likeCounter = 0;
// var uName = prompt("Enter username");

export default function App() {
  function likeClickHandler() {
    console.log("liked");
    likeCounter++;
    console.log(likeCounter);
    likeCounterDisplay.innerText = "Liked {likeCounter} times";
  }

  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: bgColor }}>Welcome {uName}</h1> */}
      <h1>Welcome</h1>
      <div id="likeCounterDisplay">Liked {likeCounter} times !!!</div>
      <button onClick={likeClickHandler}>Like 👍</button>
    </div>
  );
}
