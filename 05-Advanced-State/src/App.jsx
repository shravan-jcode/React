import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  const products =[
    {
      id:1,
      name:"Laptop",
      price:50000
    },
    {
      id:2,
      name:"phone",
      price:20000,
    },
    {
      id:3,
      name:"HeadPhones",
      price:3000
    },
  ]

  const [cart,setCart] =useState([])

  function addToCart(product){
    setCart([...cart,product])
  }

  function removeFromCart(index){
    const updateCart =cart.filter(
      (_,i) => i!==index
    )
    setCart(updateCart)
  }
  return (
    <div>
      <Navbar cartCount ={cart.length}/>

      <ProductList 
      products ={products}
      addToCart ={addToCart}
      />

      <Cart 
      cart={cart}
      removeFromCart ={removeFromCart}
      />

    </div>
  )
}

export default App