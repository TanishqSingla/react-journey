/* Challenge 3
    1.Use inline styling to style one of the element

*/

import React from "react";
import ReactDom from "react-dom";

//Note in jsx template literals are used for inline styling.

const customStyle = {
  color: "red",
  fontSize: "20px",
};

ReactDom.render(
  <div>
    <h1 style={customStyle}>Heading with custom style</h1>
    <p>This is how you use inline css</p>
  </div>,
  document.getElementById("root")
);
