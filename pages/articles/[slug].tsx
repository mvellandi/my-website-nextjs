import type { GetStaticPaths, GetStaticProps } from 'next'
import { getArticleAndNavData, getAllArticleSlugs } from '../../lib/article'
import SectionLayout from '../../components/section/Layout'
import ArticleItem from '../../components/article/Item'
import type { NavigationData, ArticleItem as ArticleItemType, StaticPathParams } from '../../types'

interface ArticlePageProps {
    nav: NavigationData
    article: ArticleItemType
    preview?: boolean
}

export default function Article({ nav, article, preview = false }: ArticlePageProps) {
    return (
        <SectionLayout type="article" nav={nav}>
            <ArticleItem data={article} />
        </SectionLayout>
    )
}

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({ params, preview = false }) => {
    const slug = params?.slug as string
    const data = await getArticleAndNavData({
        slug,
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

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllArticleSlugs()
    return {
        paths: slugs || [],
        fallback: false,
    }
}