import React from 'react'

const ProductCard = React.memo(({product,onSelect}) => {

    console.log("ProductCard Rendered: ",product.name)
  return (
    <div>
        <h3>{product.name}</h3>

        <button 
        onClick={()=>onSelect(product.name)}
        >Select</button>
    </div>
  )
})

export default ProductCard