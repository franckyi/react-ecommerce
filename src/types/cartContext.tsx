import { Dispatch, SetStateAction } from "react"
import { CartItem } from "./cartItem"

export type CartContext = {
    cartItems: CartItem[]
    setCartItems: Dispatch<SetStateAction<CartItem[]>>
    getItemQuantity: (id: number) => number
    incrementItemQuantity: (id: number) => void
    decrementItemQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    totalQuantity: number
    setTotalQuantity: Dispatch<SetStateAction<number>>
}