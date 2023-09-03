import ProductList from '../components/common/ProductList';
import Faq from '../components/common/Faq';
import FilteredProductList from '../components/common/FilteredProductList';
import CategoriesChip from '../components/common/CategoriesChip';
import FiltersDrawer from '../components/FiltersDrawer';

export default function Home({ products, handleResetFilters }) {
    return (
        <main>
            <CategoriesChip />
            <FilteredProductList products={products} handleResetFilters={handleResetFilters} />
            <h2>Top rated products</h2>
            <ProductList products={products} minRating={4.7} />
            <Faq />
            <FiltersDrawer handleResetFilters={handleResetFilters} />
        </main>
    )
}