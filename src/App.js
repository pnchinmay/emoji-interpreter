import "./styles.css";

var bgColor = "skyblue";
var uName = prompt("Enter username");

export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>Welcome {uName}</h1>
    </div>
  );
}
