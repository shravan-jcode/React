import ProductCard from "../components/ProductCard";

function Products() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
    },
  ];

  return (
    <div>

      <h1>Products Page</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;