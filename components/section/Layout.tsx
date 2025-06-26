import SiteHeader from '../site/Header'
import FixedHeader from '../elements/FixedHeader'
import FixedHeaderOffset from '../elements/FixedHeaderOffset'
import SectionNav from './Nav'
import ProjectColumn from '../project/ContentColumn'
import ContentColumn from '../elements/ContentColumn'
import Footer from '../site/Footer'
import HTMLComment from 'react-html-comment'
import type { ReactNode } from 'react'

interface NavData {
    type: string;
    title: string;
    path: string;
    prev?: string;
    next?: string;
}

interface SectionLayoutProps {
    type: string;
    nav: NavData;
    children: ReactNode;
}

// SECTIONS ARE FOR MULTI-RECORD RESOURCES
export default function SectionLayout({ type, nav, children }: SectionLayoutProps) {
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