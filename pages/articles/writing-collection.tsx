import type { GetStaticProps } from 'next'
import SectionLayout from '../../components/section/Layout'
import Link from 'next/link'
import { getArticleAndNavData } from '../../lib/article'
import Details from '../../components/elements/Details'
import type { NavigationData } from '../../types'

interface WritingPageProps {
    nav: NavigationData
    preview?: boolean
}

export default function WritingCollection({
    nav,
    preview = false,
}: WritingPageProps) {
    return (
        <SectionLayout type="article" nav={nav}>
            <>
                <h1 style={{ marginBottom: '1.8rem' }}>Written Works</h1>
                <div className="flex flex-col gap-8 pl-8 pt-12 [&>p]:my-0">
                    <p>
                        618{' '}
                        <a
                            className="text-link"
                            href="http://old-journal.vellandi.net"
                            target="_blank"
                        >
                            blog posts
                        </a>{' '}
                        on marketing and innovation
                    </p>
                    <p>
                        23{' '}
                        <a
                            className="text-link"
                            href="https://docs.google.com/document/d/1NFi898mT8bU_CtHXgf3FWBbau19C5NMcdSwA1SPR1bs/edit?tab=t.0#heading=h.aw8j7xty1g11"
                            target="_blank"
                        >
                            journalism articles
                        </a>{' '}
                    </p>
                    <p>
                        3{' '}
                        <a
                            className="text-link"
                            href="https://docs.google.com/document/d/1NFi898mT8bU_CtHXgf3FWBbau19C5NMcdSwA1SPR1bs/edit?tab=t.0#heading=h.hgyci0y0w0dz"
                            target="_blank"
                        >
                            interviews
                        </a>
                    </p>
                    <p>
                        <a
                            className="text-link"
                            href="https://docs.google.com/document/d/1NFi898mT8bU_CtHXgf3FWBbau19C5NMcdSwA1SPR1bs/edit?tab=t.0#heading=h.8m9vcjaoiq1e"
                            target="_blank"
                        >
                            Copywriting
                        </a>{' '}
                        for various brands
                    </p>
                </div>
            </>
        </SectionLayout>
    )
}

export const getStaticProps: GetStaticProps<WritingPageProps> = async ({
    preview = false,
}) => {
    const data = await getArticleAndNavData({
        slug: 'writing-collection',
        preview,
    })

    return { props: { nav: data.nav, preview } }
}
