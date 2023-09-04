import { createContext } from "react";

export const cartInitialState = {
    products: [],
    counter: 0,
    price: 0
}

export const CartContext = createContext(cartInitialState);