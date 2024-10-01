import { getArticleAndNavData, getAllArticlesWithSlug } from '/lib/article'
import SectionLayout from '/components/section/Layout'
import ArticleItem from '/components/article/Item'

export default function Article({ nav, article, preview = false }) {
    return (
        <SectionLayout type="article" nav={nav}>
            <ArticleItem data={article} />
        </SectionLayout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getArticleAndNavData({
        slug: params.slug,
        preview,
    })
    return {
        props: {
            nav: data.nav,
            article: data.article,
            preview,
        },
        revalidate: 1,
    }
}

// For each article, compute the previous/next article slugs and pass them to each
export async function getStaticPaths() {
    const allArticles = await getAllArticlesWithSlug()
    return {
        paths:
            allArticles?.map((article) => ({
                params: {
                    slug: article.slug,
                },
            })) || [],
        fallback: false,
    }
}
