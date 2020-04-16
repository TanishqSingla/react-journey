//Gaining the knowledge of React forms

import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeading] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input type="text" placeholder="What's your name" value={name} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
