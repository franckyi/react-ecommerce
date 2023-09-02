import ProductList from '../components/common/ProductList';
import Faq from '../components/common/Faq';
import FilteredProductList from '../components/common/FilteredProductList';
import CategoriesChip from '../components/common/CategoriesChip';

export default function Home({ products, query, setQuery }) {
    return (
        <main>
            <CategoriesChip />
            <FilteredProductList products={products} query={query} />
            <h2>Top rated products</h2>
            <ProductList query={''} products={products} minRating={4.7} />
            <h2>Catalogue</h2>
            <ProductList query={''} products={products} minRating={0} />
            <Faq />
        </main>
    )
}