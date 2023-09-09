import ProductCard from "./ui/ProductCard";
import { Button, Typography } from "@mui/material";
import Spinner from "./ui/Spinner";
import { FilteredProductListProps } from "../types/filteredProductListProps";

export default function FilteredProductList({ products, handleResetFilters, filters, setFilters, loading }: FilteredProductListProps) {

    return (
        <>
            <span>Searching in <Typography component="span" style={{ textTransform: 'capitalize', fontWeight: 700 }}>{filters.category}</Typography> | Price from $ {filters.price.min} to $ {filters.price.max} | ☆ {filters.rating.min} to {filters.rating.max} <Button onClick={handleResetFilters} sx={{ textTransform: 'capitalize' }}>Reset filters</Button></span>
            <section id="catalogue" className="product-list" >
                {loading && <Spinner />}
                {products
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
}