import SiteHeader from '../site/Header'
import FixedHeader from '../elements/FixedHeader'
import FixedHeaderOffset from '../elements/FixedHeaderOffset'
import ContentColumn from '../elements/ContentColumn'
import Footer from '../site/Footer'
import type { ReactNode } from 'react'

interface PageLayoutProps {
    id?: string;
    page?: string;
    children: ReactNode;
}

// PAGES ARE FOR SINGLE-RECORD RESOURCES (e.g. /about) AND FOR STATIC PAGES (e.g. /contact)
export default function PageLayout({ id, page, children }: PageLayoutProps) {
    return (
        <>
            <FixedHeader>
                <SiteHeader type="page" page={page} />
            </FixedHeader>
            <FixedHeaderOffset type="page" />
            <ContentColumn id={id}>{children}</ContentColumn>
            <Footer type="page" />
        </>
    )
}