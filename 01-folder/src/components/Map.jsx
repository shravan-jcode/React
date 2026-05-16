import React from 'react'

const Map = () => {

    const students = [
        { id: 1, name: "Rahul", age: 20 },
        { id: 2, name: "Amit", age: 21 },
        { id: 3, name: "Priya", age: 22 }
    ];

    return (
        <div>

            <table border="1">

                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )
}

export default Map