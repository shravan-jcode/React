import React, { useState } from "react";

function Crud() {

  // STATE — Array of Objects
  const [students, setStudents] = useState([]);

  // FORM STATE
  const [name, setName] = useState("");
  const [age, setAge] = useState("");



  // CREATE — Add Student
  function addStudent(e) {
    e.preventDefault();

    if (name === "" || age === "") {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      age: Number(age)
    };

    setStudents([
      ...students,
      newStudent
    ]);

    // Reset form
    setName("");
    setAge("");
  }



  // UPDATE — Increase Age
  function increaseAge(id) {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, age: student.age + 1 }
        : student
    );

    setStudents(updatedStudents);
  }



  // DELETE — Remove Student
  function deleteStudent(id) {
    const filteredStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(filteredStudents);
  }



  return (
    <div>

      <h2>Student CRUD Manager</h2>

      {/* FORM */}
      <form onSubmit={addStudent}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>

      </form>



      <hr />



      {/* CONDITIONAL RENDERING */}
      {students.length === 0 ? (
        <p>No students available</p>
      ) : (

        students.map((student) => (
          <div key={student.id}>

            <p>
              {student.name} — Age: {student.age}
            </p>

            <button
              onClick={() => increaseAge(student.id)}
            >
              Increase Age
            </button>

            <button
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>

            <hr />

          </div>
        ))

      )}

    </div>
  );
}

export default Crud;