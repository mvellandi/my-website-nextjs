import SiteHeader from '/components/site/Header'
import FixedHeader from '/components/elements/FixedHeader'
import FixedHeaderOffset from '/components/elements/FixedHeaderOffset'
import SectionNav from '/components/section/Nav'
import ProjectColumn from '/components/project/ContentColumn'
import ContentColumn from '/components/elements/ContentColumn'
import Footer from '/components/site/Footer'
import HTMLComment from 'react-html-comment'

// SECTIONS ARE FOR MULTI-RECORD RESOURCES
export default function SectionLayout({ type, nav, children }) {
    const Column = type === 'project' ? ProjectColumn : ContentColumn

    return (
        <>
            <FixedHeader>
                <SiteHeader type={type} />
                <div id="pagetop" className="h-0 scroll-mt-[12rem]">
                    {' '}
                </div>
                <SectionNav
                    aria-label={type}
                    as="nav"
                    place="top"
                    type={nav.type}
                    title={nav.title}
                    path={nav.path}
                    prev={nav.prev}
                    next={nav.next}
                />
            </FixedHeader>
            <FixedHeaderOffset type={type} />
            <HTMLComment text="MAIN CONTENT" />
            <main>
                <Column type={type} as="article">
                    {children}
                </Column>
            </main>
            <Footer type={type} />
        </>
    )
}
