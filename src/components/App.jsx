import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //setInterval(updateTime, 1000);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button className="first" onClick={updateTime}>
        Time
      </button>
      <h1>{count}</h1>
      <button className="second" onClick={decrease}>
        -
      </button>
      <button className="second" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default App;
