import ProductList from "../components/common/ProductList";

export default function SearchResults({ products }) {
    return (
        <>
            <h2>Search results</h2>
            <ProductList products={products} minRating={0} />
        </>
    )
}