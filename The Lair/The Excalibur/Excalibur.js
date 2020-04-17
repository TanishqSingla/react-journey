import React from "react";

function App() {
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");

  function change(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function changeL(event) {
    const firstName = event.target.value;
    setLName(firstName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={change}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={changeL}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
