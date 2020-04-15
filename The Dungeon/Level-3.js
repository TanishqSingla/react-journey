import React from "react";
import ReactDOM from "react-dom";

let counter = 0;
const rootElement = document.getElementById("root");

function iterate() {
  counter++;
  ReactDOM.render(
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={iterate}>+</button>
    </div>,
    rootElement
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{counter}</h1>
    <button onClick={iterate}>+</button>
  </div>,
  rootElement
);
