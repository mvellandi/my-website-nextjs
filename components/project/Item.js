/* eslint-disable @next/next/no-img-element */
import { urlForImage } from "/lib/sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { useLayoutEffect, Fragment } from "react";

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

  useLayoutEffect(() => {
    const iw = window.innerWidth;
    const sh = document.getElementsByTagName("body")[0].scrollHeight;
    const button = document.querySelector("#backtotop");
    // console.log("iw:", iw, "sh:", sh);
    if (iw < 1200 && sh > 900) {
      button.style.display = "block";
    }
  }, []);

  // Bottom margin is added for section headings to match the line spacing of the body text
  const sectionHeadingStyle =
    "text-xl text-orange font-bold mb-[0.25rem] lg:mb-[0.4rem]";
  // Tailwind's typography plugin's prose classes to style the body text
  const sectionBodyStyle = "prose-lg lg:prose-xl";
  // Flexbox gap classes match 'prose' class line spacing (visually measured & tested)
  // However, line spacing between section headers and list-style sections remains unequal.
  // This is corrected with top margin added.
  const sectionListStyle =
    "flex flex-col gap-y-[0.4rem] mt-[0.4rem] lg:text-lg lg:gap-y-[0.85rem] lg:mt-[0.8rem]";

  return (
    <div className="flex flex-col items-center bg-white site-padding-x">
      <div className="flex w-full max-w-[870px] xl:max-w-screen-xl">
        <Component className="flex flex-col gap-40 md:gap-56 bg-white w-full max-w-[870px] xl:max-w-screen-xl xl:flex-none pt-[50px] lg:pt-80 pb-[60px] lg:pb-[100px]">
          <div className="w-full flex justify-between sm:justify-start sm:gap-36">
            <div className="flex flex-col gap-8 sm:order-2">
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
          <div className="grid grid-col gap-40 md:gap-56 xl:grid xl:grid-cols-3 xl:gap-64">
            <div className="xl:col-span-2 xl:max-w-[780px]">
              {summary && (
                <section>
                  <h3 className={sectionHeadingStyle}>Summary</h3>
                  <div className={sectionBodyStyle}>
                    <PortableText value={summary} />
                  </div>
                </section>
              )}
            </div>
            {(features || structure || links) && (
              <div className="row-span-2 flex flex-col gap-40 md:gap-56">
                {features && (
                  <section>
                    <h3 className={sectionHeadingStyle}>Features</h3>
                    <div className={sectionBodyStyle}>
                      <PortableText
                        value={features}
                        onMissingComponent={false}
                      />
                    </div>
                  </section>
                )}
                {(structure || links) && (
                  <div className="flex flex-col gap-40 md:grid md:grid-cols-2 md:gap-20 xl:flex xl:flex-col xl:gap-56">
                    {structure && (
                      <section className="pr-20 xl:pr-0">
                        <h3 className={sectionHeadingStyle}>Tech / Design</h3>
                        <div className={sectionListStyle}>
                          {structure.map(({ aspect, values }) => (
                            <div
                              key={aspect}
                              className="grid grid-cols-[100px_1fr]"
                            >
                              <h4 className="inline">{aspect}:</h4>
                              <ul className="inline-flex">
                                {values.map((name, idx) => (
                                  <li key={name}>
                                    {name}
                                    {idx < values.length - 1 && (
                                      <span>,&nbsp;</span>
                                    )}
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
                        <h3 className={sectionHeadingStyle}>Project Links</h3>
                        <ul className={sectionListStyle}>
                          {links.map(({ _key, text, url }) => (
                            <li key={_key} className="text-link">
                              <Link href={url}>{text}</Link>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                )}
              </div>
            )}
            {process && (
              <section className="max-w-[780px] xl:col-span-2">
                <h3 className={sectionHeadingStyle}>Process</h3>
                <div className={sectionBodyStyle}>
                  {process.map(({ _key, _type, ...rest }) => {
                    switch (_type) {
                      case "richText":
                        return (
                          <PortableText
                            key={_key}
                            value={rest.body}
                            onMissingComponent={false}
                          />
                        );
                      case "headingRichText":
                        return (
                          <Fragment key={_key}>
                            <h4 className="font-bold">{rest.heading}</h4>
                            <PortableText
                              key={_key}
                              value={rest.body}
                              onMissingComponent={false}
                            />
                          </Fragment>
                        );
                    }
                  })}
                </div>
              </section>
            )}
          </div>
          {media && (
            <section>
              <h3 className={sectionHeadingStyle}>Media</h3>
              <div className="grid gap-40 sm:justify-center md:grid-cols-2 md:gap-20 xl:grid-cols-3 xl:gap-64">
                {media.map(({ _key, ...rest }) => (
                  <div key={_key}>
                    <img
                      src={urlForImage(rest.image).url()}
                      alt="rest.alt"
                      className="w-full max-w-[420px]"
                    />
                  </div>
                ))}
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
          <div id="backtotop" style={{ display: "none" }}>
            <div className="flex justify-center mt-8">
              <div
                className="btn btn-sm-round btn-secondary"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="text-xl inline-block">↑</span>&nbsp;Back to Top
              </div>
            </div>
          </div>
        </Component>
      </div>
    </div>
  );
}
