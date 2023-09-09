import { createContext, useContext, useState } from "react";
import { CartProviderProps } from "../types/cartProviderProps";
import { TCartItem } from "../types/cartItem";
import { TCartContext } from "../types/cartContext";

export function useCart() {
    return useContext(CartContext)
}

const CartContext = createContext({} as TCartContext);

export function CartContextProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<TCartItem[]>([])
    const totalQuantity: number = cartItems.length > 0 ?
        cartItems.map(item => item.quantity).reduce((prev, next) => prev + next) : 0;
    const [totalPrice, setTotalPrice] = useState<number>(0);

    function getItemQuantity(id: number) {
        return cartItems.find(item => {
            if (item.id == undefined) { return }
            return item.id === id
        })?.quantity || 0;
    }

    function incrementItemQuantity(id: number) {
        setCartItems(currentCartItems => {
            if (currentCartItems.find(item => item.id === id) == null) {
                return [...currentCartItems, { id, quantity: 1 }]
            } else {
                return currentCartItems.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decrementItemQuantity(id: number) {
        setCartItems(currentCartItems => {
            if (currentCartItems.find(item => item!.id === id)?.quantity === 1) {
                return currentCartItems.filter(item => item!.id !== id)
            } else {
                return currentCartItems.map(item => {
                    if (item!.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function handleIncrementClick(id: number, price: number) {
        incrementItemQuantity(id);
        setTotalPrice(totalPrice + price)
    }

    function handleDecrementClick(id: number, price: number) {
        decrementItemQuantity(id);
        setTotalPrice(totalPrice - price)
    }

    function removeFromCart(id: number, itemTotalPrice: number) {
        setCartItems(currentCartItems => {
            return currentCartItems.filter(item => item.id !== id)
        })
        setTotalPrice(totalPrice - itemTotalPrice)
    }

    function emptyCart() {
        setCartItems([])
        setTotalPrice(0)
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, emptyCart, handleIncrementClick, handleDecrementClick, totalQuantity, totalPrice, getItemQuantity, incrementItemQuantity, decrementItemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}