import PrimarySearchAppBar from "../PrimarySearchAppBar";
import TopBar from "./TopBar";

export default function Header({ allProducts }) {

    return (
        <header>
            <TopBar />
            <PrimarySearchAppBar allProducts={allProducts} />
        </header>
    )
}