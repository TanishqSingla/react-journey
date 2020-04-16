//The hidden knowledge of react-forms

/* 
	What this form does is change the h1 to the name that the user types in the text
	input
*/

import React from "react";

function App() {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      {/* The onChange attribute is triggered everytime the value of the input tag changes */}
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}
