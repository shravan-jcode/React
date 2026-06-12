import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products,onSelect}) => {
    console.log("ProductList Rendered")
  return (
    <div>
        {
            products.map((product)=>(
                <ProductCard 
                key={product.id}
                product={product}
                onSelect={onSelect}
                />
            ))
        }
    </div>
  )
}

export default ProductList