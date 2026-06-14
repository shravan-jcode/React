function ProductsList({products}){
    return(
        <>
        <h2>Products</h2>
        {
            products.map((product)=>(
                <p key={product.id}>
                    {product.name}
                </p>
            ))
        }
        </>
    )
}
export default ProductsList

