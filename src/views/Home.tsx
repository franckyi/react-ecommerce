import ProductList from '../components/common/ProductList';
import Faq from '../components/common/Faq';
import FilteredProductList from '../components/common/FilteredProductList';
import CategoriesChip from '../components/common/CategoriesChip';

export default function Home({ products }) {
    return (
        <main>
            <CategoriesChip />
            <FilteredProductList products={products} />
            <h2>Top rated products</h2>
            <ProductList products={products} minRating={4.7} />
            <h2>Catalogue</h2>
            <ProductList products={products} minRating={0} />
            <Faq />
        </main>
    )
}