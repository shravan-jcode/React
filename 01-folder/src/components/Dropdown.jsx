import React, { useState } from 'react'

const Dropdown = () => {
    const [select,setSelect] =useState("")

    function handleSelect(e){
        setSelect(e.target.value)
    }
  return (
    <div>
        <select onChange={handleSelect}>
            <option value="mumbai">Mumbai</option>
            <option value="Ratnagiri">Ratnagiri</option>
            <option value="pune">pune</option>
        </select>
        <p>City: {select}</p>


    </div>
  )
}

export default Dropdown