//Gaining the knowledge of React forms

import React from "react";
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
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name"
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

//The below component is just a redaclaration with form tag

function App1() {
  const [name, setName] = React.useState("");
  const [headingText, setHeading] = React.useState("");

  function handleChange() {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name"
          value={name}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
