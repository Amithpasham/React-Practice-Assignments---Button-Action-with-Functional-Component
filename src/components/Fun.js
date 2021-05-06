import React, {Component, useState} from "react";
function Fun() {
function funn(){
    var v=document.getElementById("para");
    v.innerHTML="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
}
    return (
      <div id="main">
        <p id="para"></p>
      <button id="click" onClick={funn}>click</button>
      </div>
    );
  }
  
  
  export default Fun;