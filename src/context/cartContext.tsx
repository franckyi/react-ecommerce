import { createContext, useContext, useState } from "react";
import { CartProviderProps } from "../types/cartProviderProps";
import { CartItem } from "../types/cartItem";
import { TCartContext } from "../types/cartContext";

export function useCart() {
    return useContext(CartContext)
}

const CartContext = createContext({} as TCartContext);

export function CartContextProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => {
            if (item.id == undefined) { return }
            return item.id === id
        })?.quantity || 0;
    }

    const totalQuantity = cartItems.length > 0 ?
        cartItems.map(item => item.quantity).reduce((prev, next) => prev + next) : 0;

    function incrementItemQuantity(id: number) {
        setCartItems(currentCartItems => {
            if (currentCartItems.find(item => item!.id === id) == null) {
                return [...currentCartItems, { id, quantity: 1 }]
            } else {
                return currentCartItems.map(item => {
                    if (item!.id === id) {
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

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, totalQuantity, getItemQuantity, incrementItemQuantity, decrementItemQuantity }}>
            {children}
        </CartContext.Provider>
    )

}