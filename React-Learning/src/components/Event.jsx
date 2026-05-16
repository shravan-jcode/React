import React, { useState } from "react";

export const Event = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitted(true);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setIsSubmitted(false);
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

        <button
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>

      </form>

      {isSubmitted && (
        <h2>
          Thank you {name}, you have submitted
        </h2>
      )}

    </div>
  );
};