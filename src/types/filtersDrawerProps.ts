import { TFilters } from "./filters"

export type FiltersDrawerProps = {
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
    handleResetFilters: () => void
}