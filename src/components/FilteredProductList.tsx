import { useContext } from "react";
import { FiltersContext, filterInitialState } from "../context/filterContext";
import ProductCard from "./ui/ProductCard";
import { Button } from "@mui/material";
import Spinner from "./ui/Spinner";

export default function FilteredProductList({ products, handleResetFilters, loading }) {
    const { filters, setFilters } = useContext(FiltersContext);

    console.log('filters.query.toUpperCase():', filters.query.toUpperCase())

    // if (filters === filterInitialState) {
    //     return (
    //         <>
    //             {loading && <Spinner />}
    //             <h2>Catalogue</h2>
    //             <span>Price from $ {filters.price.min} to $ {filters.price.max} | ☆ {filters.rating.min} to {filters.rating.max} <Button onClick={handleResetFilters} sx={{ textTransform: 'capitalize' }}>Reset filters</Button></span>
    //             <section products={products} className="product-list" >
    //                 {products.map(item => {
    //                     return <ProductCard key={item.id} item={item} />
    //                 })
    //                 }
    //             </section>
    //         </>
    //     )
    // }
    // else if (filters !== filterInitialState) {
    return (
        <>
            {loading && <Spinner />}
            <h2>Catalogue</h2>
            <span>Searching in <span style={{ fontWeight: 700 }}>{filters.category}</span> | Price from $ {filters.price.min} to $ {filters.price.max} | ☆ {filters.rating.min} to {filters.rating.max} <Button onClick={handleResetFilters} sx={{ textTransform: 'capitalize' }}>Reset filters</Button></span>
            <section products={products} className="product-list" >
                {products
                    .filter(item => filters.category.toUpperCase() === item.category.toUpperCase())
                    .filter(item =>
                        item.title.toUpperCase().includes(filters.query.toUpperCase())
                        || item.description.toUpperCase().includes(filters.query.toUpperCase()))
                    .filter(item => item.price >= filters.price.min && item.price <= filters.price.max)
                    .filter(item => item.rating.rate >= filters.rating.min && item.rating.rate <= filters.rating.max)
                    .map(item => {
                        return <ProductCard key={item.id} item={item} />
                    })
                }
            </section>
        </>
    )
    // }
}