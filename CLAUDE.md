# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website integrated with Sanity CMS v3 for Mario Vellandi. The site showcases articles, projects, and demos using a dynamic content management system.

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

### Dynamic Routing
- **Content Types**: Configured in `lib/contentTypes.js` with metadata, data fetchers, and routes
- **Page Generation**: `pages/[type].js` handles content type listing pages
- **Item Pages**: `pages/[type]/[slug].js` for individual content items
- **Static Generation**: Uses ISR (Incremental Static Regeneration)

### Environment Variables Required
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset (defaults to 'production')
- `SANITY_API_TOKEN`: For preview functionality

## Key Patterns

### Adding New Content Types
1. Create data fetcher in `/lib/[type].js`
2. Add configuration to `lib/contentTypes.js`
3. Components will automatically work with existing dynamic routing

### Component Architecture
- Reusable elements in `/components/elements/`
- Feature-specific components organized by content type
- Site-wide components in `/components/site/`

### Styling Conventions
- Use Tailwind utilities first
- Custom CSS in appropriate `/styles/` subdirectory
- Styled Components for complex component-specific styling
- 4-space indentation, single quotes, no semicolons (Prettier config)