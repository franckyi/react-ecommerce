import { TFilters } from "./filters"
import { Product } from "./product"

export type PrimarySearchAppBarProps = {
    allProducts: Product[]
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
}