import client, { getClient, previewClient } from './sanity'
import { getUniqueItems } from './utils'
import { firstArticles, lastArticles } from '../data/articles'

// META INFO
export const article = {
    name: 'article',
    title: 'Media',
    route: '/articles',
    navOrder: 2,
}

// SINGLE ARTICLE WITH PREVIOUS & NEXT PROJECT SLUGS
export async function getArticleAndNavData({ slug, preview }) {
    const curClient = getClient(preview)
    const cmsItems = await curClient.fetch(
        `*[_type == "article"] | order(publicationDate desc){
        'slug': slug.current, _id
      }`
    )

    // Combine static and CMS articles
    const allItems = [...firstArticles, ...cmsItems]

    const currentItemIndex = allItems.findIndex((item) => item.slug === slug)

    let [previousItemSlug, nextItemSlug] = [null, null]
    if (currentItemIndex > 0) {
        previousItemSlug = allItems[currentItemIndex - 1].slug
    }
    if (currentItemIndex < allItems.length - 1) {
        nextItemSlug = allItems[currentItemIndex + 1].slug
    }

    // Fetch the current article from CMS
    const articleFields = `_id, headline,
        "coverImage": coverImage.image.asset->url,
        body`

    const currentArticle = (
        await curClient.fetch(
            `*[_type == "article" && slug.current == $slug] {
        ${articleFields}
      }`,
            { slug }
        )
    )[0]

    return {
        nav: {
            title: article.title,
            type: article.name,
            path: article.route,
            prev: previousItemSlug,
            next: nextItemSlug,
        },
        article: currentArticle,
    }
}

// ALL ARTICLE SLUGS TO GENERATE STATIC PATHS
export async function getAllArticleSlugs() {
    const cmsData = await client.fetch(
        `*[_type == "article"]{ 'slug': slug.current }`
    )
    return cmsData.map((article) => ({
        params: {
            slug: article.slug,
        },
    }))
}

// ALL ARTICLE CARDS
const articleCardFields = `_id, headline, subheading, 'slug': slug.current, coverImage`

export async function getAllArticleCards({
    preview,
    fields = articleCardFields,
}) {
    const results = await getClient(preview)
        .fetch(`*[_type == "article"] | order(publicationDate desc){
      ${fields}
    }`)

    const cmsCards = results.map(
        ({ _id, headline, subheading, slug, coverImage }) => ({
            _id,
            slug,
            coverImage: coverImage.image.asset._ref,
            title: headline,
            subtitle: subheading,
            isCMSImage: true,
        })
    )

    const allCards = [...firstArticles, ...cmsCards, ...lastArticles]

    return {
        name: article.name,
        title: article.title,
        route: article.route,
        value: getUniqueItems(allCards),
    }
}

export default article
