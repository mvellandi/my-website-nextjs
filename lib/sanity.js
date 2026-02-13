import { createImageUrlBuilder } from '@sanity/image-url'
import { createClient } from 'next-sanity'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn:
        typeof document !== 'undefined' &&
        process.env.NODE_ENV === 'production',
    apiVersion: '2022-03-13',
}

export const client = createClient(config)
export default client
export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
})

export const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source) =>
    // imageBuilder.image(source).auto("format").fit("max");
    imageBuilder.image(source)

export const getClient = (usePreview) => (usePreview ? previewClient : client)
