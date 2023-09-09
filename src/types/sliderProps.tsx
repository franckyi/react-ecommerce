import { TFilters } from "./filters"

export type SliderProps = {
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
}