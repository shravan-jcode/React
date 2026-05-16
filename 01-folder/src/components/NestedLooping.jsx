import React from 'react'
import Employee from './Employee';

const NestedLooping = () => {

  const data = [
    {
      id: 1,
      department: "Engineering",
      employees: [
        {
          id: 101,
          name: "Rahul",
          skills: ["React", "Node", "MongoDB"]
        },
        {
          id: 102,
          name: "Sneha",
          skills: ["Java", "Spring", "SQL"]
        }
      ]
    },
    {
      id: 2,
      department: "Design",
      employees: [
        {
          id: 201,
          name: "Amit",
          skills: ["Figma", "Photoshop"]
        },
        {
          id: 202,
          name: "Priya",
          skills: ["Illustrator", "UI/UX"]
        }
      ]
    }
  ];

  return (
    <div>
      <h2>Nested Looping</h2>

      <ul>
        {data.map((comp) => (
          <li key={comp.id}>

            <h3>Department: {comp.department}</h3>

            <ul>
           <Employee employee ={comp.employees}/>
            </ul>

          </li>
        ))}
      </ul>

    </div>
  )
}

export default NestedLooping