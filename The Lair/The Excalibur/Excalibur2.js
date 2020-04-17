import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: "",
  });

  function change(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={change}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={change}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
