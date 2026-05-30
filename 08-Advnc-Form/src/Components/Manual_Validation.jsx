import React, { useState } from 'react'

const Manual_Validation = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({})

    // NEW STATE
    const [submittedData, setSubmittedData] = useState(null)

    function handleChange(event) {

        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function validate() {

        const newErrors = {}

        if (!formData.username) {
            newErrors.username = "Username is required"
        }

        if (!formData.email) {
            newErrors.email = "Email is required"
        }

        // FIXED
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        if (
            formData.password !== formData.confirmPassword
        ) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        return newErrors
    }

    function handleSubmit(event) {

        event.preventDefault()

        const validationErrors = validate()

        setErrors(validationErrors)

        if (
            Object.keys(validationErrors).length === 0
        ) {

            console.log(formData)

            // SAVE DATA
            setSubmittedData(formData)

            // OPTIONAL: clear form
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
    }

    return (
        <div>

            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                />

                <p>{errors.username}</p>

                <br />

                <input
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <p>{errors.email}</p>

                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <p>{errors.password}</p>

                <br />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <p>{errors.confirmPassword}</p>

                <br />

                <button type="submit">
                    Submit
                </button>

            </form>

            {/* SHOW DATA */}

            {
                submittedData && (
                    <div>

                        <h2>Submitted Data</h2>

                        <p>
                            Username: {submittedData.username}
                        </p>

                        <p>
                            Email: {submittedData.email}
                        </p>

                        <p>
                            Password: {submittedData.password}
                        </p>

                    </div>
                )
            }

        </div>
    )
}

export default Manual_Validation