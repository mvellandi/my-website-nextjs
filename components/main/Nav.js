import API from '/lib/api'
import Link from 'next/link'
import Target from '/components/elements/Target'
import cn from 'classnames'

export default function Nav({ active }) {
    // Get all sections from API
    let sections = Object.values(API).map((v) => ({
        ...v,
        isActive: false,
    }))

    // Find and set active section
    const activeIdx = sections.findIndex((section) => section.name === active)
    sections[activeIdx].isActive = true
    let activeSection = sections[activeIdx]

    // modify "projects" section's route to "/" for homepage
    const projectsIdx = sections.findIndex(
        (section) => section.name === 'project'
    )
    sections[projectsIdx].route = '/'

    // Reorder sections CODE to place:
    // - inactive sections first, as Links
    // - active section last, as h1
    // This is to establish semantic hierarchy based on the current active page
    // However, the visual display and order of the links is not affected.
    sections.splice(activeIdx, 1)
    sections.push(activeSection)

    return (
        <nav className="nav-content sticky top-0 z-10 flex w-full justify-center border-b border-gray-400 bg-gray-25 lg:border-b-2">
            <div className="flex w-full max-w-screen-lg justify-center gap-16 py-16 sm:gap-24 md:gap-36 md:py-16 lg:gap-36 xl:gap-48 2xl:gap-56 3xl:gap-64 2k:gap-[76px] 2k:py-24">
                {sections.map(({ title, route, navOrder, isActive }) => {
                    let Element
                    let style = 'btn btn-sm-round sm:btn-md-wide-round'
                    if (isActive) {
                        Element = (
                            <h1 className={cn(style, 'btn-primary-selected')}>
                                {title}
                            </h1>
                        )
                    }
                    // Hide inactive links from screen readers. Official site navigation is available in the header with a <nav> element.
                    if (!isActive) {
                        Element = (
                            <Target>
                                <Link
                                    href={route}
                                    aria-hidden
                                    className={cn(
                                        style,
                                        'target btn-secondary'
                                    )}
                                >
                                    {title}
                                </Link>
                            </Target>
                        )
                    }
                    return (
                        <div key={title} className={`order-${navOrder}`}>
                            {Element}
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}
