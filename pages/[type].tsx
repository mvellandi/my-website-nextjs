import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import MainLayout from '../components/main/Layout'
import Items from '../components/main/Items'
import Meta from '../components/site/Meta'
import { getContentTypeConfig, getContentTypePaths } from '../lib/contentTypes'
import type { ContentApiResponse } from '../types'
import type { NextPageWithLayout } from './_app'

interface ContentPageProps {
    contentType: string
    data: ContentApiResponse
    preview: boolean
}

const ContentPage: NextPageWithLayout<ContentPageProps> = ({ contentType, data }) => {
    const config = getContentTypeConfig(contentType)
    const meta = config?.meta || null

    return (
        <>
            <Meta data={meta} />
            <Items as="main" data={data} />
        </>
    )
}

ContentPage.getLayout = (page: ReactElement, pageProps: Record<string, unknown>) => {
    const { data, preview } = pageProps as unknown as ContentPageProps
    return (
        <MainLayout data={data} preview={preview}>
            {page}
        </MainLayout>
    )
}

export default ContentPage

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getContentTypePaths()
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ContentPageProps> = async ({ params, preview = false }) => {
    const type = params?.type as string
    const config = getContentTypeConfig(type)
    
    if (!config) {
        return {
            notFound: true
        }
    }
    
    const data = await config.dataFetcher({ preview })
    
    return {
        props: {
            contentType: type,
            data,
            preview,
        },
        revalidate: 1,
    }
}