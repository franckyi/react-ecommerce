import { useContext } from 'react';
import ProductCard from "./ProductCard"
import { QueryContext } from './PrimarySearchAppBar';

export default function ProductList({ products, minRating }) {
    const searchQuery = useContext(QueryContext);

    return (
        <QueryContext.Provider value={searchQuery}>
            <h1>{searchQuery}</h1>
            {
                products.filter(item => item.title.includes(searchQuery)).map(item => {
                    return <ProductCard key={item.id} item={item} />
                })
            }
            <section products={products} className="product-list">
                {products && products.filter(item => item.rating.rate >= minRating).map(item => {
                    return <ProductCard key={item.id} item={item} />
                })}
            </section>
        </QueryContext.Provider>
    )
}