import API from '/lib/api'
import Link from 'next/link'
import Target from '/components/elements/Target'
import cn from 'classnames'

/**
 * Route mapping for content types
 * Projects use homepage route, others use their default routes
 */
const getRouteForSection = (section) => {
    if (section.name === 'project') {
        return '/'
    }
    return section.route
}

/**
 * Prepare sections with active state and proper routing
 */
const prepareSections = (active) => {
    const sections = Object.values(API)
    
    return sections.map((section) => ({
        ...section,
        route: getRouteForSection(section),
        isActive: section.name === active,
    }))
}

/**
 * Order sections for semantic HTML structure:
 * - Inactive sections first (as navigation links)  
 * - Active section last (as h1 for page hierarchy)
 */
const orderSectionsForSemantics = (sections) => {
    const inactiveSections = sections.filter(section => !section.isActive)
    const activeSection = sections.find(section => section.isActive)
    
    // Return all sections with active section at the end for semantic hierarchy
    return activeSection 
        ? [...inactiveSections, activeSection]
        : sections
}

/**
 * Render navigation item based on active state
 */
const NavItem = ({ section }) => {
    const { title, route, navOrder, isActive } = section
    const baseStyle = 'btn btn-sm-round sm:btn-md-wide-round'
    
    if (isActive) {
        // Active section: non-clickable h1 with selected styling
        return (
            <div key={title} className={`order-${navOrder}`}>
                <h1 className={cn(baseStyle, 'btn-primary-selected')}>
                    {title}
                </h1>
            </div>
        )
    }
    
    // Inactive section: clickable link with secondary styling
    // Hidden from screen readers as main navigation is in header
    return (
        <div key={title} className={`order-${navOrder}`}>
            <Target>
                <Link
                    href={route}
                    aria-hidden
                    className={cn(baseStyle, 'target btn-secondary')}
                >
                    {title}
                </Link>
            </Target>
        </div>
    )
}

export default function Nav({ active }) {
    // Early return if no active section provided
    if (!active) {
        console.warn('Nav component: no active section provided')
        return null
    }
    
    // Prepare sections with routing and active state
    const sections = prepareSections(active)
    
    // Check if active section exists
    const hasActiveSection = sections.some(section => section.isActive)
    if (!hasActiveSection) {
        console.warn(`Nav component: active section "${active}" not found in API`)
    }
    
    // Order sections for semantic HTML structure
    const orderedSections = orderSectionsForSemantics(sections)
    
    return (
        <nav className="nav-content sticky top-0 z-10 flex w-full justify-center border-b border-gray-400 bg-gray-25 lg:border-b-2">
            <div className="flex w-full max-w-screen-lg justify-center gap-16 py-16 sm:gap-24 md:gap-36 md:py-16 lg:gap-36 xl:gap-48 2xl:gap-56 3xl:gap-64 2k:gap-[76px] 2k:py-24">
                {orderedSections.map((section) => (
                    <NavItem key={section.name} section={section} />
                ))}
            </div>
        </nav>
    )
}
