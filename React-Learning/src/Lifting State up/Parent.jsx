import React, { useState } from 'react'

const Parent = () => {
    const [count,setCount] =useState(0)

  return (
    <div>
        <ChildA count={count} setCount={setCount}/>
        <ChildB count={count} />
    </div>
  )
}

export default Parent

function ChildA({count,setCount}){

    return (
        <>
        <button onClick={()=>setCount(count+1)}>count</button>
        <h2>Count A {count}</h2>
        
        </>
    )
}

function ChildB({count}){

    return (
        <>
        <h2>Count B {count}</h2>
        </>
    )
}