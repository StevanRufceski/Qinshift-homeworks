import type { Product } from "../types/product.type";
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import axios from "axios";
const FAKE_STORE_API_URL_PRODUCTS = "https://fakestoreapi.com/products/category/";

interface CategoryProductsProps {
    category: string;
}


export const CategoryProducts = (props: CategoryProductsProps) => {
    const CATEGORY = props.category;
    const fetchProducts = async () => {
        const response = await axios.get(`${FAKE_STORE_API_URL_PRODUCTS}${CATEGORY}`);
        return response;
    };
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                setError(null);
                setIsLoading(true);
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts.data);
                console.log(`SUCCESS FETCHING ${CATEGORY} PRODUCTS`, products);

            } catch (error) {
                console.error(`ERROR FETCHING ${CATEGORY} PRODUCTS`, error);
                setError("Failed to fetch products, please try again later.");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [CATEGORY]);

    if (isLoading) {
        return <h4>Loading ...</h4>;
    }

    if (error) {
        return (
            <h2 style={{ color: "red" }}>{error}</h2>
        );
    }

    return (
        <>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))
            ) : (
                <h2>There are no products in the list.</h2>
            )}
        </>
    );
};
