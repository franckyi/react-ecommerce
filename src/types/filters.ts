export type TFilters = {
    query: string
    category: string | null
    rating: {
        min: number
        max: number
    };
    price: {
        min: number
        max: number
    }
}