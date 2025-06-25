import client, { getClient } from './sanity'
import { getUniqueItems } from './utils'

/**
 * Generic data fetching functions for all content types
 * Consolidates duplicate logic while maintaining content-specific configurations
 */

// Generic function to get all slugs for a content type
export async function getAllSlugs(contentType) {
    const data = await client.fetch(
        `*[_type == "${contentType}"]{ 'slug': slug.current }`
    )
    return data?.map((item) => ({
        params: {
            slug: item.slug,
        },
    })) || []
}

// Generic function to get all cards for a content type
export async function getAllCards({
    contentType,
    sanityType,
    fields,
    orderBy,
    preview = false,
    staticItems = [],
    cardMapper,
    contentConfig
}) {
    const results = await getClient(preview).fetch(
        `*[_type == "${sanityType}"] | order(${orderBy}){
            ${fields}
        }`
    )

    const cmsCards = results.map(cardMapper)
    
    // Combine static items with CMS items if provided
    const allCards = staticItems.length > 0 
        ? [...staticItems, ...cmsCards, ...(staticItems.slice(-1) || [])] // Handle firstItems, cmsItems, lastItems pattern
        : cmsCards

    return {
        name: contentConfig.name,
        title: contentConfig.title,
        route: contentConfig.route,
        value: getUniqueItems(allCards),
    }
}

// Generic function to get single item with navigation data
export async function getItemAndNavData({
    contentType,
    sanityType,
    slug,
    preview = false,
    fields,
    orderBy,
    staticItems = [],
    contentConfig,
    slugField = 'slug.current'
}) {
    const curClient = getClient(preview)
    
    // Get all items for navigation
    const cmsItems = await curClient.fetch(
        `*[_type == "${sanityType}"] | order(${orderBy}){
            'slug': ${slugField}, _id
        }`
    )

    // Combine with static items if provided
    const allItems = staticItems.length > 0 
        ? [...staticItems, ...cmsItems]
        : cmsItems

    const currentItemIndex = allItems.findIndex((item) => item.slug === slug)

    // Calculate navigation
    let [previousItemSlug, nextItemSlug] = [null, null]
    if (currentItemIndex > 0) {
        previousItemSlug = allItems[currentItemIndex - 1].slug
    }
    if (currentItemIndex < allItems.length - 1) {
        nextItemSlug = allItems[currentItemIndex + 1].slug
    }

    // Fetch the current item details
    const currentItem = (
        await curClient.fetch(
            `*[_type == "${sanityType}" && ${slugField} == $slug] {
                ${fields}
            }`,
            { slug }
        )
    )[0]

    return {
        nav: {
            title: contentConfig.title,
            type: contentConfig.name,
            path: contentConfig.route,
            prev: previousItemSlug,
            next: nextItemSlug,
        },
        [contentType]: currentItem,
    }
}

// Generic function to get item details by ID (for projects which use _id lookup)
export async function getItemByIdAndNavData({
    contentType,
    sanityType,
    slug,
    preview = false,
    fields,
    orderBy,
    contentConfig
}) {
    const curClient = getClient(preview)
    
    // Get all items for navigation
    const items = await curClient.fetch(
        `*[_type == "${sanityType}"] | order(${orderBy}){
            'slug': slug.current, _id
        }`
    )

    const currentItemIndex = items.findIndex((item) => item.slug === slug)

    // Calculate navigation
    let [previousItemSlug, nextItemSlug] = [null, null]
    if (currentItemIndex !== 0) {
        previousItemSlug = items[currentItemIndex - 1].slug
    }
    if (currentItemIndex !== items.length - 1) {
        nextItemSlug = items[currentItemIndex + 1].slug
    }

    // Fetch current item by ID
    const currentItem = (
        await curClient.fetch(
            `*[_type == "${sanityType}" && _id == $current._id] {
                ${fields}
            }`,
            { current: items[currentItemIndex] }
        )
    )[0]

    return {
        nav: {
            title: contentConfig.title,
            type: contentConfig.name,
            path: contentConfig.route,
            prev: previousItemSlug,
            next: nextItemSlug,
        },
        [contentType]: currentItem,
    }
}