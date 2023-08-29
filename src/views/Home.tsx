import CustomizedBreadcrumbs from '../components/common/CustomizedBreadcrumbs'
import PrimarySearchAppBar from '../components/common/PrimarySearchAppBar'
import Catalogue from '../components/common/Catalogue'
import BestSeller from '../components/common/BestSeller'
import Faq from '../components/common/Faq'
import TopBar from '../components/common/TopBar'

export default function Home() {
    return (
        <>
            <TopBar />
            <PrimarySearchAppBar />
            <CustomizedBreadcrumbs />
            <BestSeller />
            <Catalogue />
            <Faq />
        </>
    )
}