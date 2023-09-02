import { useContext } from "react";
import { FiltersContext } from "../../model/filterContext";
import ProductCard from './ProductCard';

export default function FilteredProductList({ products }) {
    const { filters, setFilters } = useContext(FiltersContext);

    if (filters.query.length > 0 || filters.category !== 'All') {
        return (
            <>
                <h2>Search results</h2>
                <section products={products} className="product-list" >
                    {products && products.filter(item => filters.category.toUpperCase() === item.category.toUpperCase())
                        .filter(item =>
                            item.title.toUpperCase().includes(filters.query.toUpperCase()) ||
                            item.description.toUpperCase().includes(filters.query.toUpperCase())
                        ).map(item => {
                            return <ProductCard key={item.id} item={item} />
                        })
                    }
                </section>
            </>
        )
    }
    else if (filters.query.length > 0 || filters.category === 'All') {
        return (
            <>
                <h2>Search results</h2>
                <section products={products} className="product-list" >
                    {products && products.filter(item =>
                        item.title.toUpperCase().includes(filters.query.toUpperCase()) ||
                        item.description.toUpperCase().includes(filters.query.toUpperCase())
                    ).map(item => {
                        return <ProductCard key={item.id} item={item} />
                    })
                    }
                </section>
            </>
        )
    }
}