import React, { useState, useEffect } from "react";
import "./App.css";

export default function Act3() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) {
      setMessage("Counter is at zero");
    } else if (count > 0 && count < 10) {
      setMessage("Keep going!");
    } else {
      setMessage("High Count!");
    }
  }, [count]);

  return (
    <div className="container">
      <h1 className="title">Count: {count}</h1>
      <p className="message">{message}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}