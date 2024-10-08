import client, { getClient, previewClient } from './sanity'
import { getUniqueItems } from './utils'

export const article = {
    name: 'article',
    title: 'Media',
    route: '/articles',
    navOrder: 2,
}

// SINGLE ARTICLE WITH PREVIOUS & NEXT PROJECT SLUGS

export async function getArticleAndNavData({ slug, preview }) {
    const curClient = getClient(preview)
    const items = await curClient.fetch(
        `*[_type == "article"] | order(publicationDate desc){
        'slug': slug.current, _id
      }`
    )

    const currentItemIndex = items.findIndex((item) => item.slug === slug)

    let [previousItemSlug, nextItemSlug] = [null, null]
    if (currentItemIndex !== 0) {
        previousItemSlug = items[currentItemIndex - 1].slug
    }
    if (currentItemIndex !== items.length - 1) {
        nextItemSlug = items[currentItemIndex + 1].slug
    }

    const articleFields = `_id, headline,
        "coverImage": coverImage.image.asset->url,
        body`

    let currentArticle = (
        await curClient.fetch(
            `*[_type == "article" && _id == $current._id] {
        ${articleFields}
      }`,
            { current: items[currentItemIndex] }
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

// ALL ARTICLES WITH SLUG
export async function getAllArticlesWithSlug() {
    const data = await client.fetch(
        `*[_type == "article"]{ 'slug': slug.current }`
    )
    return data
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

    console.log('results: ', results)

    const cards = results.map(
        ({ _id, headline, subheading, slug, coverImage }) => ({
            _id,
            slug,
            coverImage: coverImage.image.asset._ref,
            title: headline,
            subtitle: subheading,
        })
    )

    return {
        name: article.name,
        title: article.title,
        route: article.route,
        value: getUniqueItems(cards),
    }
}

export default article
