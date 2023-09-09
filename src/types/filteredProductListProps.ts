import { TFilters } from "./filters"
import { Product } from "./product"

export type FilteredProductListProps = {
    products: Product[]
    filters: TFilters
    handleResetFilters: () => void
    loading: boolean
}