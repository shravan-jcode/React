import React, { useEffect } from "react";

const SyncAsync01 = () => {
    useEffect(() => {
        console.log("1. Component Mounted");

        // Synchronous Code
        console.log("2. Sync Start");

        const data = "Hello React";

        console.log("3. Sync Data:", data);

        console.log("4. Sync End");

        // Asynchronous Code
        const fetchProducts = async () => {
            console.log("5. API Request Sent");


            const response = await fetch(
                "https://dummyjson.com/products"
            );

            console.log("6. Response Received");

            const result = await response.json();

            console.log("7. Data Converted to JSON");

            console.log(result);
        };

        fetchProducts();

        console.log("8. After Calling fetchProducts()");
    }, []);

    return (
        <div>
            <h1>Check Console</h1>
        </div>
    );
};

export default SyncAsync01;