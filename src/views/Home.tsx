import ProductList from '../components/ProductList';
import Faq from '../components/Faq';
import FilteredProductList from '../components/FilteredProductList';
import CategoriesChip from '../components/ui/CategoriesChip';
import FiltersDrawer from '../components/FiltersDrawer';
import Header from '../components/ui/Header';
import { HomeProps } from '../types/homeProps';

export default function Home({ allProducts, products, loading, filters, setFilters, handleResetFilters }: HomeProps) {
    return (
        <main>
            <Header allProducts={allProducts} filters={filters} setFilters={setFilters} />
            <section className="catalogue">
                <CategoriesChip filters={filters} setFilters={setFilters} />
                <FilteredProductList products={products} filters={filters} setFilters={setFilters} handleResetFilters={handleResetFilters} loading={loading} />
                <h2 id="top-rated">Top rated products</h2>
                <ProductList products={products} minRating={4.7} loading={loading} />
                <Faq />
                <FiltersDrawer handleResetFilters={handleResetFilters} filters={filters} setFilters={setFilters} />
            </section>
        </main >
    )
}