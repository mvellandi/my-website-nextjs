/* eslint-disable @next/next/no-img-element */
import HTMLComment from "react-html-comment";
import Header from "./Header";
import Media from "./Media";
import Links from "./Links";
import Structure from "./Structure";
import Process from "./Process";
import { PortableText } from "@portabletext/react";
import Script from "next/script";
import Section from "./Section";

// Gap between grid or flexbox items
export const sectionGap = "gap-28 md:gap-40 xl:gap-54";
// Bottom margin is added for section headings to match the line spacing of the body text
export const sectionHeadingStyle =
  "text-xl text-orange font-bold mb-4 lg:text-xl lg:mb-6";

export default function Item({ data }) {
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
    <>
      <HTMLComment text="PROJECT HEADER" />
      <Header name={name} sector={sector} coverImage={coverImage} />
      {/*  */}
      <HTMLComment text="PROJECT ASPECTS" />
      <main>
        <HTMLComment text="SINGLE COLUMN LAYOUT (MOBILE TO LG SIZES)" />
        {/*  */}
        <div className={`flex flex-col ${sectionGap} xl:hidden`}>
          <Section title="Summary">
            <PortableText value={summary} />
          </Section>
          {media && <Media media={media} />}
          {links && <Links links={links} />}
          {features && (
            <Section title="Features">
              <PortableText value={features} />
            </Section>
          )}
          {structure && <Structure structure={structure} />}
          {process && <Process process={process} iteration="1" />}
        </div>
        <HTMLComment text="TWO COLUMN LAYOUT (XL SIZES)" />
        {/*  */}
        <div
          className={`hidden xl:grid xl:grid-cols-[1fr_1px_1fr] xl:gap-x-[50px]`}
        >
          <HTMLComment text="COLUMN 1" />
          {/*  */}
          <div className={`flex flex-col ${sectionGap}`}>
            <Section title="Summary">
              <PortableText value={summary} />
            </Section>
            {links && (features || structure) && <Links links={links} />}
            {process && <Process process={process} iteration="2" />}
          </div>
          <div className="border-r border-[#fcfcfc]"></div>
          <HTMLComment text="COLUMN 2" />
          {/*  */}
          <div className={`flex flex-col ${sectionGap}`}>
            {media && <Media media={media} />}
            {links && (!features || !structure) && <Links links={links} />}
            {features && (
              <Section title="Features">
                <PortableText value={features} />
              </Section>
            )}
            {structure && <Structure structure={structure} />}
          </div>
        </div>
      </main>
      {/* BODY END */}
      {/* <div id="backtotop" style={{ display: "none" }}>
        <div className="flex justify-center mt-8">
          <div
            className="btn btn-sm-round btn-secondary"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="inline-block text-xl">↑</span>&nbsp;Back to Top
          </div>
        </div>
      </div> */}
      {/* <Script>
        {`
        const iw = window.innerWidth;
        const sh = document.getElementsByTagName("body")[0].scrollHeight;
        const button = document.querySelector("#backtotop");
        // console.log("iw:", iw, "sh:", sh);
        if (iw < 1200 && sh > 900) {
          button.style.display = "block";
        }
        `}
      </Script> */}
    </>
  );
}
