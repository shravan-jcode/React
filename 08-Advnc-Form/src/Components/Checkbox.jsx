import React, { useState } from 'react'

const Checkbox = () => {

    const [formData,setFormData] =
    useState({
        acceptTerms:false,
    })

    function handleChange(event){
        const {name,checked} =event.target;

        setFormData({
            ...formData,
            [name]:checked,
        })
    }


  return (
    <div>
        <label >
            <input 
            type="checkbox" 
            name='acceptTerms'
            checked={formData.acceptTerms}
            onChange={handleChange}
            />
            Accept Terms
        </label>

        <h2>
            {
                formData.acceptTerms ? "Accepted" :"Not Accepted"
            }
        </h2>
    </div>
  )
}

export default Checkbox