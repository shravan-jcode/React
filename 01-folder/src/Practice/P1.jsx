import React, { useState } from 'react'

const P1 = () => {
    const [name,setName] =useState("")

    function handleChange(e){
        console.log(e.target.checked)
        console.log(e.target.value)
      if(e.target.checked){
          setName(e.target.value)
      }
      else{
        setName("")
      }
    
    }
  return (
    <div>
        <input type="checkbox" value="js" onChange={handleChange} />{name}
    </div>
  )
}

export default P1