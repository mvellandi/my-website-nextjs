import cn from 'classnames'
import Link from 'next/link'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { 
    elementContentWidthStyle as navContentWidthStyle,
    navHeightStyle,
    shadowStyle
} from '/components/site/constants'
import HTMLComment from 'react-html-comment'

export default function SectionNav({
    place,
    as,
    title,
    type,
    prev,
    next,
    path,
}) {
    const Component = as ?? 'div'

    let navStyle = `flex justify-center w-full site-padding-x border-gray-400 bg-gray-25 ${navHeightStyle.base} ${shadowStyle.nav}`

    let navContentStyle = `flex justify-between items-center w-full py-12 ${navContentWidthStyle[type]}`
    switch (place) {
        case 'top':
            navStyle = cn(navStyle, 'border-b lg:border-b-2')
            navContentStyle = cn(navContentStyle, 'md:pt-28 lg:pt-44')
            break
        case 'bottom':
            navStyle = cn(navStyle, 'border-t lg:border-t-2')
            navContentStyle = cn(navContentStyle, 'md:pb-28 md:pt-24 lg:pb-44')
    }

    // Set homepage as index for projects
    const sectionHomeRoute = path === '/projects' ? '/' : path

    return (
        <>
            <HTMLComment text="PROJECT / SECTION NAVIGATION" />
            <Component className={navStyle}>
                <div className={navContentStyle}>
                    <Link
                        href={sectionHomeRoute}
                        className="-ml-16 text-[22px] font-medium text-gray-700 lg:-ml-28 lg:text-2xl"
                    >
                        <RiArrowLeftSLine
                            className="-mr-[2px] mb-4 inline"
                            aria-hidden
                        />
                        {title}
                    </Link>
                    <div className="mr-12 flex gap-16 text-base font-semibold sm:mr-0 lg:text-lg">
                        {prev && (
                            <Link
                                href={`${path}/${prev}`}
                                className="text-link"
                            >
                                previous
                                <span className="hidden md:inline">
                                    &nbsp;{type}
                                </span>
                            </Link>
                        )}
                        {prev && next && <span className="font-normal">|</span>}
                        {next && (
                            <Link
                                href={`${path}/${next}`}
                                className="text-link"
                            >
                                next
                                <span className="hidden md:inline">
                                    &nbsp;{type}
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </Component>
        </>
    )
}
