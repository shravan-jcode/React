function ProductCard({ product }) {

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "200px",
      }}
    >

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

    </div>
  );
}

export default ProductCard;