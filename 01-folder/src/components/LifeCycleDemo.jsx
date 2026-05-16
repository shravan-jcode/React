import React, { useEffect, useState } from "react";

const LifeCycleDemo = () => {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Lifecycle Demo</h2>

      {show && <Child count={count} />}

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <button onClick={() => setShow(!show)}>
       {show? "Remove component": "Add component"}
      </button>

    </div>
  );
};

const Child = ({ count }) => {

  // 1️⃣ MOUNT + UNMOUNT
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 2️⃣ UPDATE
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default LifeCycleDemo;