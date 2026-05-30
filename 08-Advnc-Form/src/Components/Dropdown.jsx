import React, { useState } from 'react'

const Dropdown = () => {
    const [city,setCity] =useState('')

    function handleChange(event){
        setCity(event.target.value)
    }
  return (
    <div>
        <h1>Select City</h1>

        <select 
        value={city}
        onChange={handleChange}
        >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
        </select>

        <h3>{city}</h3>
    </div>
  )
}

export default Dropdown