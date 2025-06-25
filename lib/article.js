import { getAllSlugs, getAllCards, getItemAndNavData } from './contentBase'
import { firstArticles, lastArticles } from '../data/articles'

// META INFO
export const article = {
    name: 'article',
    title: 'Media',
    route: '/articles',
    navOrder: 2,
}

// CONTENT TYPE CONFIGURATION
const articleConfig = {
    contentType: 'article',
    sanityType: 'article',
    orderBy: 'publicationDate desc',
    cardFields: '_id, headline, subheading, \'slug\': slug.current, coverImage',
    detailFields: `_id, headline,
        "coverImage": coverImage.image.asset->url,
        body`,
    cardMapper: ({ _id, headline, subheading, slug, coverImage }) => ({
        _id,
        slug,
        coverImage: coverImage.image.asset._ref,
        title: headline,
        subtitle: subheading,
        isCMSImage: true,
    })
}

// SINGLE ARTICLE WITH PREVIOUS & NEXT ARTICLE SLUGS
export async function getArticleAndNavData({ slug, preview }) {
    return getItemAndNavData({
        contentType: 'article',
        sanityType: articleConfig.sanityType,
        slug,
        preview,
        fields: articleConfig.detailFields,
        orderBy: articleConfig.orderBy,
        staticItems: firstArticles,
        contentConfig: article,
    })
}

// ALL ARTICLE SLUGS TO GENERATE STATIC PATHS
export async function getAllArticleSlugs() {
    return getAllSlugs(articleConfig.sanityType)
}

// ALL ARTICLE CARDS
export async function getAllArticleCards({ preview, fields = articleConfig.cardFields }) {
    const result = await getAllCards({
        contentType: 'article',
        sanityType: articleConfig.sanityType,
        fields,
        orderBy: articleConfig.orderBy,
        preview,
        cardMapper: articleConfig.cardMapper,
        contentConfig: article,
    })

    // Handle the specific firstArticles + cmsCards + lastArticles pattern
    const cmsCards = result.value
    const allCards = [...firstArticles, ...cmsCards, ...lastArticles]

    return {
        ...result,
        value: allCards,
    }
}

export default article
