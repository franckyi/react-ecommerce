import PrimarySearchAppBar from "../PrimarySearchAppBar";
import TopBar from "./TopBar";

export default function Header({ products }) {

    return (
        <header>
            <TopBar />
            <PrimarySearchAppBar products={products} />
        </header>
    )
}