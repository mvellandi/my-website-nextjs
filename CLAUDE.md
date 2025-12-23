# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio website integrated with Sanity CMS v3 for Mario Vellandi. The site showcases articles, projects, and demos using a dynamic content management system. The codebase has been recently modernized with centralized styling, consolidated routing, and full Sanity CDN migration.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Architecture Overview

### Content Management System
- **Sanity CMS Integration**: Content is managed through Sanity CMS with environment-based configuration
- **Dynamic Content Types**: The system supports extensible content types defined in `lib/contentTypes.js`
- **Content Fetching**: Centralized through `lib/contentBase.js` with type-specific modules (`lib/article.js`, `lib/project.js`, `lib/demo.js`)
- **Image Optimization**: Uses Sanity CDN for images with Next.js Image component

### File Structure
- **`/components/`**: Organized by feature (article, elements, main, page, project, section, site)
- **`/pages/`**: File-based routing with dynamic routes `[type].js` and `[slug].js` for content types
- **`/lib/`**: Business logic and API layer for content management
- **`/styles/`**: CSS organized by component type with Tailwind + custom CSS + Styled Components
- **`/data/`**: Static data and test files

### Styling System
- **Hybrid Approach**: Tailwind CSS + Styled Components + custom CSS files
- **Custom Configuration**: Extensive Tailwind config with custom breakpoints, colors, and typography
- **Component-based CSS**: Styles organized in `/styles/components/`, `/styles/pages/`, `/styles/site/`
- **Centralized Style Coordination**: `components/site/constants.ts` provides centralized styling system for consistent responsive behavior across components

### Dynamic Routing (Recently Consolidated)
- **Unified Page System**: `pages/[type].tsx` handles all content type listing pages (articles, demo)
- **Content Types**: Configured in `lib/contentTypes.ts` with metadata, data fetchers, and routes
- **Centralized API**: All data fetching consolidated through `lib/contentBase.js` with type-specific modules
- **Item Pages**: `pages/[type]/[slug].tsx` for individual content items
- **Static Generation**: Uses ISR (Incremental Static Regeneration) with full TypeScript support
- **Legacy Pages**: Individual pages have been consolidated and converted to TypeScript

### Environment Variables Required
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset (defaults to 'production')
- `SANITY_API_TOKEN`: For preview functionality

## Recent Architectural Improvements

### Major Dependency Updates (December 2023)

- **Next.js 16.1.1**: Upgraded from v15 with Turbopack bundler for faster builds
- **React 19.1.0**: Latest stable release with improved performance
- **ESLint 9**: Migrated to flat config system (eslint.config.js)
- **Sanity Ecosystem**: Fully updated (@sanity/client v7, next-sanity v12, @sanity/image-url v2)
- **PortableText v6**: Major update for rich text rendering
- **TypeScript**: Complete migration with comprehensive type safety and enhanced developer experience
- **Zero Vulnerabilities**: All security issues resolved

### Code Consolidation & Refactoring
- **Target Component**: Refactored to be sole responsibility for touch target sizing and consistent wrapper patterns
- **Navigation Simplification**: Removed complexity from main navigation component with error handling improvements

### Performance & Organization
- **API Consolidation**: Centralized data fetching patterns across all content types
- **Route Unification**: Consolidated individual page types into dynamic routing system
- **Static Asset Migration**: Moved all images to CDN for better performance and management
- **Turbopack**: Next.js 16 uses new bundler for significantly faster builds

## TypeScript Migration: ✅ COMPLETE

The codebase has been fully migrated from JavaScript to TypeScript with comprehensive type safety and zero breaking changes.

### Migration Results
- **50+ files converted**: All components, pages, libraries, and API routes
- **Full type coverage**: Props, API responses, content types, and Next.js functions
- **100% build success**: All functionality preserved during conversion
- **Enhanced DX**: IDE support, autocomplete, and compile-time error detection

### Key TypeScript Patterns
- **Component interfaces** with optional properties and ElementType support
- **Content type definitions** for Sanity CMS integration and API responses
- **Next.js typing** for getStaticProps, getStaticPaths, getServerSideProps
- **Union types** for complex data structures and process variants
- **Strategic `any` usage** for complex external library types (PortableText, FsLightbox)

## Key Patterns

### Adding New Content Types
1. Create data fetcher in `/lib/[type].js` (legacy JS files remain for data layer)
2. Add configuration to `lib/contentTypes.ts` with proper TypeScript interfaces
3. Components will automatically work with existing dynamic routing system

### Component Architecture
- Reusable elements in `/components/elements/`
- Feature-specific components organized by content type
- Site-wide components in `/components/site/`

### Centralized Styling System
- **`components/site/constants.ts`** is the single source of truth for:
  - Content width styles by page type (`elementContentWidthStyle`)
  - Navigation heights, gaps, and responsive breakpoints
  - Page type checking utility (`pageTypeCheck`)
  - Style generator functions (`getNavMenuStyle`, `getFooterContentStyle`)
- **All layout components** import from constants for consistency
- **Page-type-specific styling** is coordinated across Header, Nav, Footer, and FixedHeaderOffset components

### Styling Conventions
- Use Tailwind utilities first
- Import responsive styles from `components/site/constants.ts` for layout components
- Custom CSS in appropriate `/styles/` subdirectory
- Styled Components for complex component-specific styling
- 4-space indentation, single quotes, no semicolons (Prettier config)

**Note on Tailwind v4**: Migration to Tailwind CSS v4 has been deferred to a future branch. See `docs/TAILWIND_V4_MIGRATION.md` for the planned migration strategy. Current version: Tailwind CSS 3.4.19.

### Image Handling (Recently Migrated to Sanity CDN)
- **Full CDN Migration**: All static images have been moved from `/public/images/` to Sanity CDN
- **Sanity CDN Images**: Use `urlForImage(imageRef).url()` from `/lib/sanity` for CMS images
- **Conditional Image Sources**: Check `isCMSImage` flag to determine whether to resolve via Sanity or use direct URLs
- **Pattern**: `isCMSImage ? urlForImage(coverImage).url() : coverImage`
- **Data Updates**: `data/media.js` and `data/articles.js` updated with Sanity image references
- **Component Updates**: Hero component and rich-media collection updated to use CDN images