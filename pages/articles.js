import Meta from '/components/site/Meta'
import MainLayout from '/components/main/Layout'
import Items from '/components/main/Items'
import { getAllArticleCards } from '/lib/article'
import { firstArticles, lastArticles } from '/data/articles'

// TODO: Change the layout from MainLayout to a "articles index" layout

export default function Articles({ data, preview }) {
    return (
        <>
            <Meta data={null} />
            <MainLayout preview={preview} data={data}>
                <Items as="main" data={data} />
            </MainLayout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getAllArticleCards({ preview })
    data.value = [...firstArticles, ...data.value, ...lastArticles]

    // console.log('data: ', data)
    return {
        props: {
            data,
            preview,
        },
        revalidate: 1,
    }
}
