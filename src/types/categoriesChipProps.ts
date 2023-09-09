import { TFilters } from "./filters"

export type CategoriesChipProps = {
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
}