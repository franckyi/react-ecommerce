import { Dispatch, SetStateAction } from "react"
import { CartItem } from "./cartItem"

export type TCartContext = {
    cartItems: CartItem[]
    setCartItems: Dispatch<SetStateAction<CartItem[]>>
    incrementItemQuantity: (id: number) => void
    decrementItemQuantity: (id: number) => void
    getItemQuantity: (id: number) => number
    totalQuantity: number
    totalPrice: number
    setTotalQuantity: Dispatch<SetStateAction<number>>
}