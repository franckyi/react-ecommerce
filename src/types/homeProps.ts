import { TFilters } from "./filters"
import { Product } from "./product"

export type HomeProps = {
    allProducts: Product[]
    products: Product[]
    loading: boolean
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
    handleResetFilters: () => void
}