import React, {Component, useState} from "react";
function Fun() {
  const [count, setCount] = useState("");
    return (
      <div id="main">
        <p id="para">{count}</p>
      <button id="click" onClick={() => setCount("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")}>click
      </button>
      </div>
    );
  }
  
  
  export default Fun;