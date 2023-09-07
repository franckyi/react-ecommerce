import { Product } from "./product"

export type FilteredProductListProps = {
    products: Product[]
    handleResetFilters: () => void
    loading: boolean
}