import type { GetStaticPaths, GetStaticProps } from 'next'
import Meta from '../components/site/Meta'
import MainLayout from '../components/main/Layout'
import Items from '../components/main/Items'
import { getContentTypeConfig, getContentTypePaths } from '../lib/contentTypes'
import type { ContentApiResponse } from '../types'

interface ContentPageProps {
    contentType: string
    data: ContentApiResponse
    preview: boolean
}

export default function ContentPage({ contentType, data, preview }: ContentPageProps) {
    const config = getContentTypeConfig(contentType)
    const meta = config?.meta || null
    
    return (
        <>
            <Meta data={meta} />
            <MainLayout preview={preview} data={data}>
                <Items as="main" data={data} />
            </MainLayout>
        </>
    )
}

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