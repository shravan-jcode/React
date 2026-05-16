import React, { useState } from 'react'
import { useEffect } from 'react'

const ConditionalRendering = () => {
    const[data,setData]=useState(false)

  useEffect(()=>{
      setTimeout(() => {
        setData(true)
        
    }, 5000);

  },)

  return (
    <div>
        <h1>{data?"Data recived":"Loading....."}</h1>

    </div>
  )
}

export default ConditionalRendering