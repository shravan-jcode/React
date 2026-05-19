import React, { useState } from 'react'

const P2 = () => {

    const [formData,setFormData] =useState({
        email:"",
        password:""
    })

    function handleChange(e){
        setFormData({
            ...formData,
            ...formData,
            [e.target.name]:e.target.value,
        })

    }
  return (
     <div>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <h2>{formData.email}</h2>
      <h2>{formData.password}</h2>
    </div>
  )
}

export default P2