import { createContext } from "react";

export const CartContext = createContext({
    products: [],
    counter: 0,
    total: 0
});