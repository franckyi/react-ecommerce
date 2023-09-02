import ProductCard from "./ProductCard";

export default function FilteredProductList({ products, query }) {
    if (query.length > 0) {
        return (
            <>
                <h4>current query: {query}</h4>
                <h2>Search results</h2>
                <section products={products} className="product-list" >
                    {products && products.filter(item =>
                        item.title.toUpperCase().includes(query.toUpperCase())).map(item => {
                            return <ProductCard key={item.id} item={item} />
                        })
                    }
                </section>
            </>
        )
    }
}