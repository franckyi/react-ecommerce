import { HeaderProps } from "../../types/headerProps";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import TopBar from "./TopBar";

export default function Header({ allProducts }: HeaderProps) {
    return (
        <header>
            <TopBar />
            <PrimarySearchAppBar allProducts={allProducts} />
        </header>
    )
}