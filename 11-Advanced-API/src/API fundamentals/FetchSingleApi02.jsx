import { useEffect, useState } from "react";

function FetchSingleApi02() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [newProduct, setNewProduct] = useState("");

    async function getProducts() {
        try {
            setLoading(true);

            const response = await fetch(
                "https://dummyjson.com/products"
            );

            const data = await response.json();

            setProducts(data.products);
        } catch (error) {
            setError("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const addProduct = () => {
        if (!newProduct.trim()) return;

        const product = {
            id: Date.now(),
            title: newProduct,
        };

        setProducts([...products, product]);

        setNewProduct("");
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Total Products: {filteredProducts.length}</h1>

            {/* Search */}
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br />
            <br />

            {/* Add Product */}
            <input
                type="text"
                placeholder="Enter Product"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
            />

            <button onClick={addProduct}>
                Add Product
            </button>

            <hr />

            {/* Product List */}
            {filteredProducts.map((product) => (
                <h2 key={product.id}>
                    {product.title}
                </h2>
            ))}
        </div>
    );
}

export default FetchSingleApi02;