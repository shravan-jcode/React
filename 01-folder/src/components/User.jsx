import React from 'react'

const User = ({name}) => {

  return (
    <div>
      {name ?<h1>Hello {name}</h1>:<h1>Sorry user not found</h1>}

    </div>
  )
}

export default User