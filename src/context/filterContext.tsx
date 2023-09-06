import { createContext } from "react";
import { TFilters } from "../types/filters";

export const filterInitialState: TFilters = {
    query: '',
    category: 'All',
    rating: { min: 0, max: 5 },
    price: { min: 1, max: 2000 },
}
export const FiltersContext = createContext(filterInitialState); 