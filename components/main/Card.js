import Image from 'next/image'
import { urlForImage } from '/lib/sanity'
import Link from 'next/link'

export default function Card({
    data: { _id, title, subtitle, slug, url, coverImage, isCMSImage },
    route,
    as,
}) {
    const Component = as ?? 'div'
    return (
        <Component className="card">
            {/* Though the card image will visually appear first, the code prioritizes the h2 title */}
            <div className="order-2 -mt-2 flex flex-col gap-[2px]">
                <h2 className="card-link text-balance text-base font-bold leading-[1.22] -tracking-1 text-gray-900">
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
                    <h3 className="text-sm leading-[1.375] sm:text-[1.7rem] sm:leading-[1.337]">
                        {subtitle}
                    </h3>
                ) : null}
            </div>
            <Image
                src={isCMSImage ? urlForImage(coverImage).url() : coverImage}
                alt="altText"
                width={100}
                height={100}
                className="order-1 h-[90px] w-[90px]"
            />
        </Component>
    )
}
