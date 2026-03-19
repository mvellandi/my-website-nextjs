import type { GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import MainLayout from '../components/main/Layout'
import Items from '../components/main/Items'
import Meta from '../components/site/Meta'
import { getAllProjectCards } from '../lib/project'
import type { ContentApiResponse } from '../types'
import type { NextPageWithLayout } from './_app'

interface HomePageProps {
    data: ContentApiResponse
    preview: boolean
}

const Home: NextPageWithLayout<HomePageProps> = ({ data }) => {
    let meta = {
        title: 'Mario Vellandi: Software Engineer and Product Developer for Elixir, JS, and CSS',
        description:
            'Portfolio, services offered, articles, and quick projects by Mario Vellandi.',
        // image: "/images/og-image.png",
    }
    return (
        <>
            <Meta data={meta} />
            <Items as="main" data={data} />
        </>
    )
}

Home.getLayout = (page: ReactElement, pageProps: Record<string, unknown>) => {
    const { data, preview } = pageProps as unknown as HomePageProps
    return (
        <MainLayout data={data} preview={preview}>
            {page}
        </MainLayout>
    )
}

export default Home

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