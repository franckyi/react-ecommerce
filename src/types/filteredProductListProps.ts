import { TFilters } from "./filters"
import { Product } from "./product"

export type FilteredProductListProps = {
    products: Product[]
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
    handleResetFilters: () => void
    loading: boolean
}