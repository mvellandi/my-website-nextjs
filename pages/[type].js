import Meta from '/components/site/Meta'
import MainLayout from '/components/main/Layout'
import Items from '/components/main/Items'
import { getContentTypeConfig, getContentTypePaths } from '/lib/contentTypes'

export default function ContentPage({ contentType, data, preview }) {
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

export async function getStaticPaths() {
    const paths = getContentTypePaths()
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { type }, preview = false }) {
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