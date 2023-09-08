import { Product } from "./product"

export type HomeProps = {
    allProducts: Product[]
    products: Product[]
    loading: boolean
    handleResetFilters: () => void
}