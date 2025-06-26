import type { GetStaticProps } from 'next'
import Meta from '../components/site/Meta'
import MainLayout from '../components/main/Layout'
import Items from '../components/main/Items'
import { getAllProjectCards } from '../lib/project'
import type { ContentApiResponse } from '../types'

interface HomePageProps {
    data: ContentApiResponse
    preview: boolean
}

export default function Home({ data, preview }: HomePageProps) {
    let meta = {
        title: 'Mario Vellandi: Software Engineer and Product Developer for Elixir, JS, and CSS',
        description:
            'Portfolio, services offered, articles, and quick projects by Mario Vellandi.',
        // image: "/images/og-image.png",
    }
    return (
        <>
            <Meta data={meta} />
            <MainLayout preview={preview} data={data}>
                <Items as="main" data={data} />
            </MainLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ preview = false }) => {
    const data = await getAllProjectCards({ preview })
    return {
        props: {
            data,
            preview,
        },
        revalidate: 1,
    }
}