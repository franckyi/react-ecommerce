import CustomizedBreadcrumbs from '../components/common/CustomizedBreadcrumbs';
import PrimarySearchAppBar from '../components/common/PrimarySearchAppBar';
import ProductList from '../components/common/ProductList';
import Faq from '../components/common/Faq';
import TopBar from '../components/common/TopBar';

export default function Home({ products }) {
    return (
        <>
            <header>
                <TopBar />
                <PrimarySearchAppBar />
            </header>
            <main>
                <CustomizedBreadcrumbs />
                <h2>Search results</h2>
                <ProductList products={products} minRating={0} />
                <h2>Top rated products</h2>
                <ProductList products={products} minRating={4.7} />
                <h2>Catalogue</h2>
                <ProductList products={products} minRating={0} />
                <Faq />
            </main>
        </>
    )
}