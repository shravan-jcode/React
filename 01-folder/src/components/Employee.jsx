import React from 'react'

const Employee = ({employee}) => {
  return (
    <div>
           {employee.map((emp) => (
                <li key={emp.id}>

                  Name: {emp.name}

                  <p>Skills:</p>

                  <ul>
                    {emp.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>

                </li>
              ))}
    </div>
  )
}

export default Employee