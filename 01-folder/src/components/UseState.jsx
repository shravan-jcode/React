import React from 'react'
import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer started");

    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      console.log("Timer stopped");
      clearInterval(id);
    };
  }, []);

  return <h1>{count}</h1>;
}

const UseState = () => {
  return (
    <div>UseState
      <Timer/>
    </div>
  )
  
}

export default UseState