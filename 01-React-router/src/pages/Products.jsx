import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  const products = [
    {
      id: 1,
      name: "Laptop"
    },
    {
      id: 2,
      name: "Phone"
    },
    {
      id: 3,
      name: "Headphone"
    }
  ]

  return (
    <div>

      <h1>Products Page</h1>

      {
        products.map((product) => (
          <div key={product.id}>

            <h3>{product.name}</h3>

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>

          </div>
        ))
      }

    </div>
  )
}

export default Products