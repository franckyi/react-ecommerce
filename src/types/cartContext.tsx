import { Dispatch, SetStateAction } from "react"
import { TCartItem } from "./cartItem"

export type TCartContext = {
    cartItems: TCartItem[]
    setCartItems: Dispatch<SetStateAction<TCartItem[]>>
    incrementItemQuantity: (id: number) => void
    decrementItemQuantity: (id: number) => void
    getItemQuantity: (id: number) => number
    totalQuantity: number
    totalPrice: number
    setTotalQuantity: Dispatch<SetStateAction<number>>
}