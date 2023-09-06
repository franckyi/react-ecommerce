import { createContext } from "react";
import { filterInitialState } from "../model/filtersInitialState";

export const FiltersContext = createContext(filterInitialState);