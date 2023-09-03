import ProductList from '../components/common/ProductList';
import Faq from '../components/common/Faq';
import FilteredProductList from '../components/common/FilteredProductList';
import CategoriesChip from '../components/common/CategoriesChip';
import FiltersDrawer from '../components/FiltersDrawer';

export default function Home({ products, handleResetFilters, loading, setLoading }) {
    return (
        <main>
            <CategoriesChip />
            <FilteredProductList products={products} handleResetFilters={handleResetFilters} loading={loading} setLoading={setLoading} />
            <h2>Top rated products</h2>
            <ProductList products={products} minRating={4.7} loading={loading} setLoading={setLoading} />
            <Faq />
            <FiltersDrawer handleResetFilters={handleResetFilters} />
        </main>
    )
}