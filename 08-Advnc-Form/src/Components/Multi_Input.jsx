import React, { useState } from 'react'

const Multi_Input = () => {

  const [formData,setFormData] =useState({
    username:"",
    email:"",
    password:"",

  })

  function handleChange(event){

    const  {name,value} = event.target

    setFormData({
      ...formData,
      [name]:value
    })
  }
  return (
    <div>
      <h1>Registration Form</h1>

      <form >
        <input 
        type="text" 
        name='username'
        placeholder='Enter Username'
        value={formData.username}
        onChange={handleChange}
        />

        <br /><br />

        <input 
        type="email"
        name='email'
        placeholder='Enter Email'
        value={formData.email}
        onChange={handleChange}

        />

        <br /><br />

        <input 
        type="text" 
        name='password'
        placeholder='Enter Password'
        value={formData.password}
        onChange={handleChange}
        />
      </form>

      <hr />
      <h3>Name: {formData.username}</h3>
      <h3>Email: {formData.email}</h3>
      <h3>Password: {formData.password}</h3>

    </div>
  )
}

export default Multi_Input