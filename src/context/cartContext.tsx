import { createContext, useContext, useState } from "react";
import { CartProviderProps } from "../types/cartProviderProps";

type CartContext = {
    getItemQuantity: (id: number) => number
    incrementItemQuantity: (id: number) => void
    decrementItemQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type CartItem = {
    id: number,
    quantity: number
}

export function useCart() {
    return useContext(CartContext)
}

const CartContext = createContext({} as CartContext);

export function CartContextProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
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
                    }
                })
            }
        })
    }

    function decrementItemQuantity(id: number) {
        setCartItems(currentCartItems => {
            if (currentCartItems.find(item => item.id === id)?.quantity === 1) {
                return currentCartItems.filter(item => item.id !== id)
            } else {
                return currentCartItems.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentCartItems => {
            return currentCartItems.filter(item => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, getItemQuantity, incrementItemQuantity, decrementItemQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )

}