import PrimarySearchAppBar from "./PrimarySearchAppBar";
import TopBar from "./TopBar";

export default function Header({ setQuery }) {
    return (
        <>
            <header>
                <TopBar />
                <PrimarySearchAppBar setQuery={setQuery} />
            </header>
        </>
    )
}