import React from 'react'

const ProductList = ({products,addToCart}) => {
  return (
    <div>
        <h2>Products</h2>

        {
            products.map((product)=>(
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>

                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    <hr />

                </div>
            ))
        }

    </div>
  )
}

export default ProductList