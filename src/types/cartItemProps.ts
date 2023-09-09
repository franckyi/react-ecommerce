import { TCartItem } from "./cartItem"
import { Product } from "./product"

export type TCartItemProps = {
    allProducts: Product[]
    currentItem: TCartItem
}