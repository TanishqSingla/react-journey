//! Note - Components name should always be pascal cased i.e first letter should always be uppercase
/* 
    * Challenge 1
    Create a react component
    The react component should contain an unordered list
    The unordered list should contain atleast 3 list items
*/

import React from "react";

function List() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default List;
