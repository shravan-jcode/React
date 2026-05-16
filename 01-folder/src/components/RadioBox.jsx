import React, { useState } from "react";

function RadioBox() {

  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  return (
    <div>

      <h3>Gender</h3>

      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <h3>Marital Status</h3>

      <input
        type="radio"
        name="marital"
        value="single"
        checked={maritalStatus === "single"}
        onChange={(e) => setMaritalStatus(e.target.value)}
      /> Single

      <input
        type="radio"
        name="marital"
        value="married"
        checked={maritalStatus === "married"}
        onChange={(e) => setMaritalStatus(e.target.value)}
      /> Married

      <h3>Gender: {gender}</h3>
      <h3>Status: {maritalStatus}</h3>

    </div>
  );
}

export default RadioBox;