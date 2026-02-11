import React, { useState } from "react";

interface CounterProps{
    step?: number;
}

function Counter({step = 10}: CounterProps) {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount(count + step);
  };
  const handleDecreaseClick = () => {
    setCount(count - step);
  };

  const handleOneClick = () => {
    setCount(count + 1)
  }

    const handleMinusClick = () => {
    setCount(count - 1)
  }


  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncreaseCount}>Count + 10</button>
      <button onClick={handleDecreaseClick} disabled={count < step}>Count - 10</button>
      <button onClick={handleOneClick}>Count + 1</button>
      <button onClick={handleMinusClick} disabled={count===0}>Count - 1</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default Counter;

