import ProductList from '../components/ProductList';
import Faq from '../components/Faq';
import FilteredProductList from '../components/FilteredProductList';
import CategoriesChip from '../components/ui/CategoriesChip';
import FiltersDrawer from '../components/FiltersDrawer';
import Header from '../components/ui/Header';

export default function Home({ allProducts, products, loading, setLoading, handleResetFilters }) {
    return (
        <main>
            <Header allProducts={allProducts} />
            <section className="catalogue">
                <CategoriesChip />
                <FilteredProductList products={products} handleResetFilters={handleResetFilters} loading={loading} />
                <h2>Top rated products</h2>
                <ProductList products={products} minRating={4.7} loading={loading} setLoading={setLoading} />
                <Faq />
                <FiltersDrawer handleResetFilters={handleResetFilters} />
            </section>
        </main>
    )
}