import React, { useState } from 'react'

const RadioBtn = () => {

    const [gender, setGender] = useState("")

    function handleChange(event) {
        setGender(event.target.value)
    }

    return (
        <div>
            <h1>Select Gender</h1>
            <label >
                <input
                    type="radio"
                    value='Male'
                    checked={gender === "Male"}
                    onChange={handleChange}
                />
                Male
            </label>

            <br />

            <label >
                <input
                    type="radio"
                    value='Female'
                    checked={gender === "Female"}
                    onChange={handleChange}
                />
                Female
            </label>

            <h2>{gender}</h2>


        </div>
    )
}

export default RadioBtn