import React, { useState } from "react";
import "./index.css";
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="main">
      <div className="main-items">
        <h1 className="text-items">{count}</h1>
        <div className="main-items-buttons">
          <button onClick={handleIncrement} className="increment-button">
            Increment
          </button>
          <button onClick={handleDecrement} className="decrement-button">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
