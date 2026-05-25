import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()

  return (
    <div>

      <h1>Product Details</h1>

      <h2>Product ID: {id}</h2>

    </div>
  )
}

export default ProductDetails