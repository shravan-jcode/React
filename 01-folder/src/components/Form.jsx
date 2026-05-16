import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [skills, setSkills] = useState([])
    const [check, setCheck] = useState(false)
    const [gender, setGender] = useState("")
    const [submitted, setSubmitted] = useState(false)

    // checkbox (are you sure)
    function handleCheck(e) {
        setCheck(e.target.checked)
    }

    // skills checkbox
    function handleSkills(e) {
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

    // radio button
    function handleGender(e) {
        setGender(e.target.value)
    }

    // submit form
    function handleSubmit(e) {
        e.preventDefault()   // stop page reload
        setSubmitted(true)
    }

    return (
        <div>

            <form autoComplete='off' onSubmit={handleSubmit}>

                <input

                    autoComplete='off'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    autoComplete='off'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                    autoComplete='off'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <h3>Select Skills</h3>

                <input
                    type="checkbox"
                    value="js"
                    onChange={handleSkills}
                /> js

                <input
                    type="checkbox"
                    value="java"
                    onChange={handleSkills}
                /> java

                <input
                    type="checkbox"
                    value="python"
                    onChange={handleSkills}
                /> python

                <br /><br />

                <h3>Select Gender</h3>

                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleGender}
                /> Male

                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleGender}
                /> Female

                <br /><br />

                <input
                    type="checkbox"
                    checked={check}
                    onChange={handleCheck}
                /> Are you sure

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

            <hr />

            {
                submitted && (
                    <div>
                        <h2>Form Submitted ✅</h2>

                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                        <p>Gender: {gender}</p>
                        <p>Are you sure: {check.toString()}</p>

                        <h3>Skills:</h3>

                        {
                            skills.map((skill) => {
                                return <p key={skill}>{skill}</p>
                            })
                        }

                    </div>
                )
            }

        </div>
    )
}

export default Form