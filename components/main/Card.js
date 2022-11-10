import API from "/lib/api";
import Image from "next/future/image";
import imageSample from "/public/mario-portrait-fall-200.jpg";
import { urlForImage } from "/lib/sanity";
import Link from "next/link";

export default function Card({
  data: { _id, title, subtitle, slug, url, coverImage },
  route,
  as,
}) {
  const Component = as || "div";
  return (
    <Component className="card">
      {/* Reordered to semantically prioritize titles, though image will visually appear first */}
      <div className="flex flex-col gap-[5px] order-2">
        <h2 className="card-title text-gray-900 font-bold tracking-[-0.02rem] leading-[1.22] text-base lg:text-lg lg:leading-[1.2]">
          {url ? (
            <Link href={url}>{title}</Link>
          ) : (
            <Link href={`${route}/${slug}`}>{title}</Link>
          )}
        </h2>
        {subtitle ? (
          <h3 className="text-sm leading-[1.375] lg:text-base lg:leading-[1.3]">
            {subtitle}
          </h3>
        ) : null}
      </div>
      <Image
        src={urlForImage(coverImage).url()}
        // src={urlForImage(coverImage).url()}
        alt="altText"
        width={100}
        height={100}
        className="w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] order-1"
      />
    </Component>
  );
}
