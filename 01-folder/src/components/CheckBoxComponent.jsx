import React, { useState } from 'react'

const CheckBoxComponent = () => {

  const [skills, setSkills] = useState([])

  function handleChange(e) {
    const value = e.target.value

    if (e.target.checked) {
      setSkills([
        ...skills,
        value
      ])
    } else {
      setSkills(
        skills.filter((skill) => skill !== value)
      )
    }
  }

  return (
    <div>
      <h2>Select Skills</h2>

      <input type="checkbox" value="js" onChange={handleChange} /> js
      <br />

      <input type="checkbox" value="python" onChange={handleChange} /> python
      <br />

      <input type="checkbox" value="java" onChange={handleChange} /> java

      <hr />

      {
        skills.map((skill) => {
          return <h3 key={skill}>{skill}</h3>
        })
      }
    </div>
  )
}

export default CheckBoxComponent