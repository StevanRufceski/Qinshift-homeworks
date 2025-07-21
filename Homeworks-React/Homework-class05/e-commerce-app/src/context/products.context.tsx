import { useState, useEffect, createContext } from "react";
import type { Product } from "../types/product.type";
import axios from "axios";
const FAKE_STORE_API_URL = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  const response = await axios.get(FAKE_STORE_API_URL);
  return response;
};

interface ProductsContext {
  products: Product[];
}

const initialValues: ProductsContext = {
  products: [],
};

export const ProductsContext = createContext(initialValues);

interface ProductsContextProviderProps {
  children: React.ReactNode;
}

export const ProductsContextProvider = (props: ProductsContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      try {
        setError(undefined);
        setIsLoading(true);
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts.data);
        console.log("PRODUCTS", products);

      } catch (error) {
        console.error("ERROR HAPPENED", error);
        setError("Failed to fetch products, please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <h4>Loading ...</h4>;
  }

  if (error) {
    return (
      <h2 style={{ color: "red" }}>{error}</h2>
    );
  }

  return (
    <ProductsContext.Provider
      value={{
        products: products,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
