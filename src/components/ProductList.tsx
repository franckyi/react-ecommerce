import { ProductListProps } from '../types/productListProps';
import ProductCard from './ui/ProductCard';
import Spinner from './ui/Spinner';

export default function ProductList({ products, minRating, loading }: ProductListProps) {
    return (
        <>
            {loading && <Spinner />}
            <section className="product-list">
                {products && products.filter(item => item.rating.rate >= minRating).map(item => {
                    return <ProductCard key={item.id} item={item} />
                })}
            </section>
        </>
    )
}