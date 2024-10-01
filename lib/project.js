import client, { getClient, previewClient } from './sanity'
import { getUniqueItems } from './utils'

// META INFO
export const project = {
    name: 'project',
    title: 'Projects',
    route: '/projects',
    navOrder: 1,
}

// SINGLE PROJECT WITH PREVIOUS & NEXT PROJECT SLUGS

export async function getProjectAndNavData({ slug, preview }) {
    const curClient = getClient(preview)
    const items = await curClient.fetch(
        `*[_type == "project"] | order(completionDate desc, _updatedAt desc){
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

    const projectFields = `_id, name, sector, 
          "coverImage": coverImage.image.asset->url,
          summary, features, 
          "structure": structure.aspects[]{aspect, "values": values[]->name},
          process, links, media`

    let currentProject = (
        await curClient.fetch(
            `*[_type == "project" && _id == $current._id] {
        ${projectFields}
      }`,
            { current: items[currentItemIndex] }
        )
    )[0]

    return {
        nav: {
            title: project.title,
            type: project.name,
            path: project.route,
            prev: previousItemSlug,
            next: nextItemSlug,
        },
        project: currentProject,
    }
}

// ALL PROJECTS WITH SLUG
export async function getAllProjectsWithSlug() {
    const data = await client.fetch(
        `*[_type == "project"]{ 'slug': slug.current }`
    )
    return data
}

// ALL PROJECT CARDS
const projectCardFields = `_id, name, description, 'slug': slug.current, coverImage`

export async function getAllProjectCards({
    fields = projectCardFields,
    preview,
}) {
    const results = await getClient(preview).fetch(
        `*[_type == "project"] | order(completionDate desc){
        ${fields}
      }`
    )

    const cards = results.map(
        ({ _id, name, description, slug, coverImage }) => ({
            _id,
            slug,
            coverImage: coverImage.image.asset._ref,
            title: name,
            subtitle: description,
        })
    )

    return {
        name: project.name,
        title: project.title,
        route: project.route,
        value: getUniqueItems(cards),
    }
}

export default project
