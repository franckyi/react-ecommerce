import { createContext } from "react";

export const FiltersContext = createContext({
    query: '',
    category: 'All',
    rating: { min: 0, max: 5 },
    price: { min: 1, max: 10000 },
});