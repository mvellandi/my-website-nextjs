import { getAllCards } from './contentBase'

// META INFO
export const demo = {
    name: 'demo',
    title: 'Demo',
    route: '/demo',
    navOrder: 3,
}

// CONTENT TYPE CONFIGURATION
const demoConfig = {
    contentType: 'demo',
    sanityType: 'toy',
    orderBy: 'publishedAt desc',
    cardFields: '_id, name, description, url, coverImage',
    cardMapper: ({ _id, name, description, url, coverImage }) => ({
        _id,
        url,
        coverImage: coverImage.image.asset._ref,
        title: name,
        subtitle: description,
        isCMSImage: true,
    })
}

// ALL DEMO CARDS
export async function getAllDemoCards({ preview, fields = demoConfig.cardFields }) {
    const result = await getAllCards({
        contentType: 'demo',
        sanityType: demoConfig.sanityType,
        fields,
        orderBy: demoConfig.orderBy,
        preview,
        cardMapper: demoConfig.cardMapper,
        contentConfig: demo,
    })

    // Return cards without getUniqueItems for demo (as per TODO comment in original)
    return {
        ...result,
        value: result.value, // Could apply getUniqueItems here if needed
    }
}

export default demo
