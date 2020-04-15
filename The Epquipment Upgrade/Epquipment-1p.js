//files containing p before the .js are practice files

import React from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(currentTime);
  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
