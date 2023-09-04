import { createContext } from "react";

export const filterInitialState = {
    query: '',
    category: 'All',
    rating: { min: 0, max: 5 },
    price: { min: 1, max: 2000 },
}
export const FiltersContext = createContext(filterInitialState); 