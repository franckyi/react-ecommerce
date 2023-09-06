import { Dispatch, SetStateAction } from "react"
import { TCartItem } from "./cartItem"

export type TCartContext = {
    cartItems: TCartItem[]
    setCartItems: Dispatch<SetStateAction<TCartItem[]>>
    incrementItemQuantity: (id: number) => void
    decrementItemQuantity: (id: number) => void
    handleIncrementClick: (id: number, price: number, quantity: number) => void
    handleDecrementClick: (id: number, price: number, quantity: number) => void
    removeFromCart: (id: number, itemTotalPrice: number) => void
    emptyCart: () => void
    getItemQuantity: (id: number) => number
    updateTotalPrice: (id: number, price: number, quantity: number) => void
    totalQuantity: number
    totalPrice: number
    itemTotalPrice: number
    setItemTotalPrice: Dispatch<SetStateAction<number>>
    setTotalQuantity: Dispatch<SetStateAction<number>>
}