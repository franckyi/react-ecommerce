import { Dispatch, SetStateAction } from "react"
import { Product } from "./product"
import { TFilters } from "./filters"

export type HomeProps = {
    allProducts: Product[]
    products: Product[]
    loading: boolean
    handleResetFilters: Dispatch<SetStateAction<TFilters>>
}