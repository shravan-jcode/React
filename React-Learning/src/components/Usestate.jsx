import React, { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(true);
  const [bgColor, setBgColour] = useState("black");

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      
      <button onClick={() => setCount(count + 1)}>
        count
      </button>

      {hide && <h1>{count}</h1>}

      <button onClick={() => setHide(!hide)}>
        hide
      </button>

      <br />

      <button
        onClick={() =>
          setBgColour(bgColor === "black" ? "white" : "black")
        }
      >
        Toggle Theme
      </button>

    </div>
  )
}

export default Usestate