import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'
import Link from 'next/link'
import type { ElementType } from 'react'
import type { ContentCard } from '../../types'

interface CardProps {
    data: ContentCard
    route: string
    as?: ElementType
}

export default function Card({
    data: { _id, title, subtitle, slug, url, coverImage, isCMSImage },
    route,
    as,
}: CardProps) {
    const Component = as ?? 'div'
    return (
        <Component className="card">
            {/* Though the card image will visually appear first, the code prioritizes the h2 title */}
            <div className="order-2 -mt-2 flex flex-col gap-[2px]">
                <h2 className="card-link text-balance text-sm font-bold leading-[1] -tracking-1 text-gray-900">
                    {/* Cards might point to an external URL (if available) */}
                    {/* OTHERWISE to an internal static page or an asset-page (if URL is not available) */}
                    {url ? (
                        <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {title}
                        </Link>
                    ) : (
                        <Link href={`${route}/${slug}`}>{title}</Link>
                    )}
                </h2>
                {subtitle ? (
                    <h3 className="text-sm leading-[1.1]">{subtitle}</h3>
                ) : null}
            </div>
            <Image
                src={isCMSImage ? urlForImage(coverImage).url() : coverImage}
                alt="altText"
                width={60}
                height={60}
                className="order-1 h-[60px] w-[60px]"
            />
        </Component>
    )
}
