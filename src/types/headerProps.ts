import { TFilters } from "./filters";
import { Product } from "./product";

export type HeaderProps = {
    allProducts: Product[]
    filters: TFilters
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>
}