import ProductList from '../components/ProductList';
import Faq from '../components/Faq';
import FilteredProductList from '../components/FilteredProductList';
import CategoriesChip from '../components/ui/CategoriesChip';
import FiltersDrawer from '../components/FiltersDrawer';
import Header from '../components/ui/Header';
import { useCart } from '../context/cartContext';

export default function Home({ filters, products, loading, setLoading, handleResetFilters }) {

    return (
        <main>
            <Header products={products} />
            <section className="catalogue">
                <h5>{JSON.stringify(filters)}</h5>
                <h5>{JSON.stringify(useCart())}</h5>
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