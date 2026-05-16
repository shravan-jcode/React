import React, { useEffect, useState } from 'react'

const Clock = ({color}) => {
    const [time,setTime] =useState(0);

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            
        }, 1000);

    },[])
  return (
    <div>
        <h1
        style={{
            color:color,
            backgroundColor:"#dfd4d4",
            width:"140px",
            padding:"8px",
            borderRadius:"20px"
        }}
        >{time}</h1>
    </div>
  )
}

export default Clock