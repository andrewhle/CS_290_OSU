import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

function Increment() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount(prevCount => (prevCount === 0 ? prevCount : prevCount - 1));
  }

  function handleIncrement() {
    setCount(prevCount => (prevCount < 10 ? prevCount + 1 : prevCount));
  }

  return (
    <>
      <FiChevronDown className="incrementButton" onClick={handleDecrement}>
        -
      </FiChevronDown>
      <span>{count}</span>
      <FiChevronUp className="incrementButton" onClick={handleIncrement}>
        +
      </FiChevronUp>
    </>
  );
}

export default Increment;
