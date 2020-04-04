/*  
    * Dynamic styling
    * Challenge 4
    Show a single h1 saying "Good Morning" and change it's text with respect to time
    i.e it should display "Good Morning" If it's b/w 12 am and 12 pm
        "Good Afternoon" if it's b/w 12pm and 6pm
        "Good Evening" if it's b/w 6pm and midnight
        Also color the text
        Morning = red
        Afternoon = green
        Evening = blue

*/

import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const time = date.getHours();

let greeting;
let customStyle = {
  color: "",
};

if (time >= 0 && time <= 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time > 12 && time <= 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
