import { useState, useEffect, createContext } from "react";
import type { Category } from "../types/category.type";
import axios from "axios";
const FAKE_STORE_API_URL = "https://fakestoreapi.com/products/categories";

const fetchCategories = async () => {
  const response = await axios.get(FAKE_STORE_API_URL);
  return response;
};

interface CategoriesContext {
  categories: Category[];
  isLoading: boolean;
  error?: string;
}

const initialValues: CategoriesContext = {
  categories: [],
  isLoading: true
};

export const CategoriesContext = createContext(initialValues);

interface CategoriesContextProviderProps {
  children: React.ReactNode;
}

export const CategoriesContextProvider = (props: CategoriesContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      try {
        setError(undefined);
        setIsLoading(true);
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories.data);
      } catch (error) {
        console.error("ERROR FETCHING CATEGORIES", error);
        setError("Failed to fetch categories, please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories: categories,
        isLoading: isLoading,
        error: error,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};
