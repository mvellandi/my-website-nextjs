/* eslint-disable @next/next/no-img-element */
import { urlForImage } from "/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default function Item({ data, as }) {
  const Component = as || "div";
  const {
    name,
    sector,
    coverImage,
    summary,
    features,
    structure,
    process,
    links,
    media,
  } = data;
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex w-full max-w-screen-lg">
        <Component className="flex flex-col gap-10 md:gap-14 bg-white w-full max-w-[870px] px-5 pt-[50px] lg:pt-[80px] pb-10 lg:pb-[100px]">
          <div className="flex justify-between sm:justify-start sm:gap-9">
            <div className="flex flex-col gap-2 sm:order-2">
              <h1 className="text-3xl text-black font-light -tracking-1 leading-tight">
                {name}
              </h1>
              <p className="text-sm text-gray-700 font-bold uppercase tracking-3">
                {sector}
              </p>
            </div>
            <img
              src={coverImage}
              alt="altText"
              width={100}
              height={100}
              className="w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] order-1"
            />
          </div>
          {summary && (
            <section>
              <h3 className="text-xl text-orange font-bold mb-2">Summary</h3>
              <div className="prose-lg lg:prose-xl">
                <PortableText value={summary} />
              </div>
            </section>
          )}
          {features && (
            <section>
              <h3 className="text-xl text-orange font-bold mb-2">Features</h3>
              <div className="prose-lg lg:prose-xl">
                <PortableText value={features} onMissingComponent={false} />
              </div>
            </section>
          )}
          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-5">
            {structure && (
              <section className="pr-5">
                <h3 className="text-xl text-orange font-bold mb-2">
                  Tech / Design
                </h3>
                <div className="flex flex-col lg:text-lg space-y-2">
                  {structure.map(({ aspect, values }) => (
                    <div key={aspect} className="grid grid-cols-[100px_1fr]">
                      <h4 className="inline">{aspect}:</h4>
                      <ul className="inline-flex">
                        {values.map((name, idx) => (
                          <li key={name}>
                            {name}
                            {idx < values.length - 1 && <span>,&nbsp;</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {links && (
              <section>
                <h3 className="text-xl text-orange font-bold mb-2">
                  Project Links
                </h3>
                <ul className="space-y-2 lg:text-lg">
                  {links.map(({ _key, text, url }) => (
                    <li key={_key} className="text-link">
                      <Link href={url}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          {process && (
            <section>
              <h3 className="text-xl text-orange font-bold mb-2">Process</h3>
              <div className="prose-lg lg:prose-xl">
                {process.map(({ _key, _type, ...rest }) => {
                  switch (_type) {
                    case "richText":
                      return (
                        <PortableText
                          value={rest.body}
                          onMissingComponent={false}
                        />
                      );
                      break;
                    case "headingRichText":
                      return (
                        <>
                          <h4 className="font-bold">{rest.heading}</h4>
                          <PortableText
                            value={rest.body}
                            onMissingComponent={false}
                          />
                        </>
                      );
                  }
                })}
              </div>
            </section>
          )}
          {media && (
            <section>
              <h3 className="text-xl text-orange font-bold mb-2">Media</h3>
              <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-5">
                {media.map(({ _key, ...rest }) => (
                  <div key={_key}>
                    <img
                      src={urlForImage(rest.image).url()}
                      alt="rest.alt"
                      className="w-full max-w-[420px]"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
          <div className="flex justify-center mt-2">
            <div
              className="btn btn-secondary btn-sm rounded-full"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span className="text-xl inline-block">↑</span>&nbsp;Back to Top
            </div>
          </div>
        </Component>
      </div>
    </div>
  );
}
