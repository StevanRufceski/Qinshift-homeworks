import './Products.css'
import { useContext } from 'react';
import { ProductsContext } from '../context/products.context';
import { ProductCard } from '../components/ProductCard';

export const Products = () => {
    const context = useContext(ProductsContext);
    return (
        <>
            <section className="promo">
                <h1>All products</h1>
            </section>
            {context.products.length > 0 ? (
                <ul>
                    {context.products.map((product) => {
                        return (
                            <ProductCard
                                product={product}
                                key={product.id}
                            />
                        );
                    })}
                </ul>
            ) : (
                <h2>There are no products in the list.</h2>
            )}
        </>
    );
};
