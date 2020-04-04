/*
 *  Challenge 2 - Template literals in JSX
    Basic setup:
    1. Create a react app from scratch

    Actual Task
    1. It should display 2 paragraphs
    2. One of the para should contain your name
    3. Display current year using Date class in js
*/

import React from "react";
import ReactDom from "react-dom";

const myName = "Tanishq Singla";
const date = new Date();
const year = date.getFullYear();

ReactDom.render(
  <div>
    <p>{`Created by ${myName}`}</p>
    <p>{`On ${year}`}</p>
  </div>,
  document.getElementById("root")
);

//? Different Methods
/* 
    <p>Created By {myName}</p>
    <p>On {year}
*/
