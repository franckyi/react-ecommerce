import ProductCard from './ui/ProductCard';
import Spinner from './ui/Spinner';

export default function ProductList({ products, minRating, loading }) {
    return (
        <>
            {loading && <Spinner />}
            <section products={products} className="product-list">
                {products && products.filter(item => item.rating.rate >= minRating).map(item => {
                    return <ProductCard key={item.id} item={item} />
                })}
            </section>
        </>
    )
}