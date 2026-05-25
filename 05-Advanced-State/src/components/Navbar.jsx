import React from 'react'

const Navbar = ({cartCount}) => {
  return (
    <div>
        <h1>Shopping Cart App</h1>

        <h2>Cart Items: {cartCount}</h2>

        <hr />
        
    </div>
  )
}

export default Navbar