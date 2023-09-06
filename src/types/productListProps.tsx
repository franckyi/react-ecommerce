import { Product } from "./product"

export type ProductListProps = {
    products: Product[]
    minRating: number
    loading: boolean
}