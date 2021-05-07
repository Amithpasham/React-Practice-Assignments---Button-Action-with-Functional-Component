import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  const [count, setCount] = useState(false);
    return (
      <div id="main">
       count==true?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:""
  
      <button id="click" onClick={() => setCount(true)}>click
      </button>
      </div>
    );
  }



export default App;
