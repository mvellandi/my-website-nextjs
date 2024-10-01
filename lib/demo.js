import client, { getClient, previewClient } from './sanity'
import { getUniqueItems } from './utils'

export const demo = {
    name: 'demo',
    title: 'Demo',
    route: '/demo',
    navOrder: 3,
}

const demoCardFields = `_id, name, description, url, coverImage`

export async function getAllDemoCards({ preview, fields = demoCardFields }) {
    const results = await getClient(preview)
        .fetch(`*[_type == "toy"] | order(publishedAt desc){
      ${fields}
    }`)

    const cards = results.map(
        ({ _id, name, description, url, coverImage }) => ({
            _id,
            url,
            coverImage: coverImage.image.asset._ref,
            title: name,
            subtitle: description,
            isCMSImage: true,
        })
    )
    // TODO: uncomment line below to see unique results
    // return getUniqueItems(results);
    return {
        name: demo.name,
        title: demo.title,
        route: demo.route,
        value: cards,
    }
}

export default demo
