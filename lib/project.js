import { getAllSlugs, getAllCards, getItemByIdAndNavData } from './contentBase'

// META INFO
export const project = {
    name: 'project',
    title: 'Projects',
    route: '/projects',
    navOrder: 1,
}

// CONTENT TYPE CONFIGURATION
const projectConfig = {
    contentType: 'project',
    sanityType: 'project',
    orderBy: 'completionDate desc, _updatedAt desc',
    cardFields: '_id, name, description, \'slug\': slug.current, coverImage',
    detailFields: `_id, name, sector, 
        "coverImage": coverImage.image.asset->url,
        summary, features, 
        "structure": structure.aspects[]{aspect, "values": values[]->name},
        process, links, media`,
    cardMapper: ({ _id, name, description, slug, coverImage }) => ({
        _id,
        slug,
        coverImage: coverImage.image.asset._ref,
        title: name,
        subtitle: description,
        isCMSImage: true,
    })
}

// SINGLE PROJECT WITH PREVIOUS & NEXT PROJECT SLUGS
export async function getProjectAndNavData({ slug, preview }) {
    return getItemByIdAndNavData({
        contentType: 'project',
        sanityType: projectConfig.sanityType,
        slug,
        preview,
        fields: projectConfig.detailFields,
        orderBy: projectConfig.orderBy,
        contentConfig: project,
    })
}

// ALL PROJECT SLUGS TO GENERATE STATIC PATHS
export async function getAllProjectSlugs() {
    return getAllSlugs(projectConfig.sanityType)
}

// ALL PROJECT CARDS
export async function getAllProjectCards({ fields = projectConfig.cardFields, preview }) {
    return getAllCards({
        contentType: 'project',
        sanityType: projectConfig.sanityType,
        fields,
        orderBy: projectConfig.orderBy,
        preview,
        cardMapper: projectConfig.cardMapper,
        contentConfig: project,
    })
}

export default project
