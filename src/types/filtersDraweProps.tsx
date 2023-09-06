import { Dispatch, SetStateAction } from "react"
import { TFilters } from "./filters"

export type FiltersDrawerProps = {
    handleResetFilters: Dispatch<SetStateAction<TFilters>>
}