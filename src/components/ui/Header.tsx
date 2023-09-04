import PrimarySearchAppBar from "../PrimarySearchAppBar";
import TopBar from "./TopBar";

export default function Header() {

    return (
        <>
            <header>
                <TopBar />
                <PrimarySearchAppBar />
            </header>
        </>
    )
}