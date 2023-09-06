import { Dispatch, SetStateAction } from "react"
import { Product } from "./product"
import { TFilters } from "./filters"

export type FilteredProductListProps = {
    products: Product[]
    handleResetFilters: Dispatch<SetStateAction<TFilters>>
    loading: boolean
}