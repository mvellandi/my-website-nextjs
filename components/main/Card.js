import Image from "next/image";
import { urlForImage } from "/lib/sanity";
import Link from "next/link";

export default function Card({
  data: { _id, title, subtitle, slug, url, coverImage },
  route,
  as,
}) {
  const Component = as ?? "div";
  return (
    <Component className="card">
      {/* Reordered to semantically prioritize titles, though image will visually appear first */}
      <div className="flex flex-col gap-[5px] order-2">
        <h2 className="card-link text-balance text-gray-900 font-bold -tracking-1 leading-[1.22] text-base lg:text-lg lg:leading-[1.2] 2k:leading-[1.4]">
          {url ? (
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          ) : (
            <Link href={`${route}/${slug}`}>{title}</Link>
          )}
        </h2>
        {subtitle ? (
          <h3 className="text-sm leading-[1.375] sm:text-[1.7rem] sm:leading-[1.337] lg:text-base lg:leading-[1.3] 3xl:leading-[1.4]">
            {subtitle}
          </h3>
        ) : null}
      </div>
      <Image
        src={urlForImage(coverImage).url()}
        alt="altText"
        width={100}
        height={100}
        className="w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] order-1"
      />
    </Component>
  );
}
