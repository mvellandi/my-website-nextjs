// Core type definitions for the portfolio site

// Content API response structure
export interface ContentApiResponse {
  value: ContentCard[]
  name: string
  title: string
  route: string
  _type?: string
}

// Content types
export interface ContentTypeConfig {
  name: string
  title: string
  route: string
  navOrder: number
  dataFetcher: (params?: { preview?: boolean; fields?: string }) => Promise<ContentApiResponse>
  meta: {
    title: string
    description: string
  }
}

export type ContentTypes = {
  [key: string]: ContentTypeConfig
}

// Article/Content cards
export interface ContentCard {
  _id: string
  slug?: string
  coverImage: string
  title: string
  subtitle: string
  url?: string
  isCMSImage?: boolean
}

// Sanity image reference
export interface SanityImageRef {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

// Page types for styling
export type PageType = 'main' | 'project' | 'article' | 'page'

// Style configurations
export interface StyleConfig {
  [key: string]: string
}

// Navigation styles
export interface NavStyles {
  base: string
}

export interface NavMenuStyles {
  project: string
  article: string
  page: string
}

// Navigation data structure
export interface NavigationData {
  title: string
  type: string
  path: string
  prev: string | null
  next: string | null
}

// Article item structure 
export interface ArticleItem {
  _id: string
  headline: string
  coverImage: string
  body: any // PortableText content
}

// Project item structure
export interface ProjectItem {
  _id: string
  title: string
  slug: string
  [key: string]: any
}

// Generic item and nav response
export interface ItemAndNavResponse<T = any> {
  nav: NavigationData
  [key: string]: T | NavigationData
}

// Static path params
export interface StaticPathParams {
  params: {
    slug: string
  }
}

// Utility function types
export type PageTypeChecker = (type: string, list: string[]) => boolean
export type StyleGenerator = (type: string) => string