import ProductCard from './ProductCard';

export default function ProductList({ products, minRating }) {
    return (
        <>
            <section products={products} className="product-list">
                {products && products.filter(item => item.rating.rate >= minRating).map(item => {
                    return <ProductCard key={item.id} item={item} />
                })}
            </section>
        </>
    )
}