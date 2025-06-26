import { getAllArticleCards } from './article'
import { getAllDemoCards } from './demo'
import type { ContentTypes, ContentTypeConfig } from '../types'

// Content type configurations for dynamic routing (excluding projects which is handled by index.js)
export const contentTypes: ContentTypes = {
    articles: {
        name: 'article', 
        title: 'Media',
        route: '/articles',
        navOrder: 2,
        dataFetcher: getAllArticleCards,
        meta: {
            title: 'Articles by Mario Vellandi',
            description: 'Articles and media content by Mario Vellandi.',
        }
    },
    demo: {
        name: 'demo',
        title: 'Demo', 
        route: '/demo',
        navOrder: 3,
        dataFetcher: getAllDemoCards,
        meta: {
            title: 'Demo Projects by Mario Vellandi',
            description: 'Demo projects and experiments by Mario Vellandi.',
        }
    }
}

// Get content type config by type name
export function getContentTypeConfig(type: string): ContentTypeConfig | undefined {
    return contentTypes[type]
}

// Get all valid content type paths for static generation
export function getContentTypePaths() {
    return Object.keys(contentTypes).map(type => ({
        params: { type }
    }))
}