import { createContext } from "react";

export const OrderContext = createContext({
    counter: 0,
    price: 0,
});