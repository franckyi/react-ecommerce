export type TFilters = {
    query: string;
    category: string;
    rating: {
        min: number;
        max: number;
    };
    price: {
        min: number;
        max: number;
    };
}