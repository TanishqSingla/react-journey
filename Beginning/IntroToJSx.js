/* Challenge 1 - Messing with JSX - 1
    Basic setup:
    1. Create a react app from scratch

    Actual task
    1. It should display one h1 heading
    2. It should display an unordered list
    3. The list should contain atleast 3 items
*/

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>Lorem Ipsum</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
