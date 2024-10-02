// import { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'
import SectionLayout from '/components/section/Layout'
import Link from 'next/link'
import { getArticleAndNavData } from '/lib/article'
import Details from '/components/elements/Details'

// const DynamicAccordion = dynamic(
//     () => import('/components/elements/DynamicAccordion'),
//     {
//         ssr: false,
//     }
// )

export default function WritingCollection({ nav, preview = false }) {
    // const [isMounted, setIsMounted] = useState(false)

    // useEffect(() => {
    //     setIsMounted(true)
    // }, [])

    return (
        <SectionLayout type="article" nav={nav}>
            <>
                <h1 style={{ marginBottom: '1.2rem' }}>Written Works</h1>

                <div id="pagetop" className="prose-area pb-12">
                    {/* <p style={{ margin: '0', lineHeight: '1.3' }}>
                        Samples include:
                    </p> */}
                </div>
                <Details summary="Articles">
                    <ul className="item-list">
                        <li>
                            <a href="http://old-journal.vellandi.net">
                                Personal Blog
                            </a>
                            , 2006-2016, 618 posts
                        </li>
                        <li>
                            <a href="http://old-journal.vellandi.net">
                                Show the World What’s Inside
                            </a>{' '}
                            (MarketingProfs)
                        </li>
                    </ul>
                    <h3 className="not-prose">
                        Sellion, product development agency:
                    </h3>
                    <ul className="item-list">
                        <li>
                            <a href="http://old-journal.vellandi.net">
                                New Product Design Strategy
                            </a>
                        </li>
                        <li>
                            <a href="http://old-journal.vellandi.net">
                                Discovery - The Pursuit of Breakthrough Ideas
                            </a>
                        </li>
                    </ul>
                </Details>
                <Details summary="Interviews"></Details>
                <Details summary="Brand Identity"></Details>
                <Details summary="Events"></Details>
                <Details summary="Promotional Copy"></Details>
                <Details summary="Descriptions"></Details>
                <Details summary="Advertorial"></Details>
                <Details summary="Press Releases"></Details>
            </>
        </SectionLayout>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getArticleAndNavData({
        slug: 'writing-collection',
        preview,
    })

    return {
        props: {
            nav: data.nav,
            preview,
        },
    }
}
