import { HeaderProps } from "../../types/headerProps";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import TopBar from "./TopBar";

export default function Header({ allProducts, filters, setFilters }: HeaderProps) {
    return (
        <>
            <TopBar />
            <PrimarySearchAppBar allProducts={allProducts} filters={filters} setFilters={setFilters} />
        </>
    )
}