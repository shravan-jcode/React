import React, { useContext } from 'react'
import UserContext from './UserContext'

const Info = () => {
    const {user,color} =useContext(UserContext)

  return (
    <div>
        <h1 style={{border:`2px solid ${color}`}}> name: {user.name} age: {user.age}</h1>
    </div>
  )
}

export default Info