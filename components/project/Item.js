/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import Media from "./Media";
import Links from "./Links";
import Structure from "./Structure";
import Process from "./Process";
import { PortableText } from "@portabletext/react";
import Script from "next/script";
import Section from "./Section";

// Gap between grid or flexbox items
export const sectionGap = "gap-28 md:gap-44";
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
      {/* HEADER */}
      <Header name={name} sector={sector} coverImage={coverImage} />
      <article className={`flex flex-col ${sectionGap}`}>
        {/* SINGLE COLUMN LAYOUT (MOBILE TO LG SIZES) */}
        <div className={`flex flex-col ${sectionGap} xl:hidden`}>
          {/* SUMMARY */}
          <Section title="Summary">
            <PortableText value={summary} />
          </Section>
          {/* MEDIA */}
          {media && (
            <Section title="Media">
              <Media media={media} />
            </Section>
          )}
          {/* LINKS */}
          {links && (
            <Section title="Project Links">
              <Links links={links} />
            </Section>
          )}
          {/* FEATURES */}
          {features && (
            <Section title="Features">
              <PortableText value={features} />
            </Section>
          )}
          {/* STRUCTURE */}
          {structure && (
            <Section title="Design / Tech">
              <Structure structure={structure} />
            </Section>
          )}
          {/* PROCESS */}
          {process && <Process process={process} />}
        </div>
        {/* TWO COLUMN LAYOUT (XL SIZES) */}
        <div
          className={`hidden xl:grid xl:grid-cols-[1fr_1fr] xl:gap-x-[100px]`}
        >
          {/* COLUMN 1 */}
          <div className={`flex flex-col ${sectionGap}`}>
            {/* SUMMARY */}
            <Section title="Summary">
              <PortableText value={summary} />
            </Section>
            {/* LINKS */}
            {links && (features || structure) && (
              <Section title="Project Links">
                <Links links={links} />
              </Section>
            )}
            {/* PROCESS */}
            {process && <Process process={process} />}
          </div>
          {/* COLUMN 2 */}
          <div className={`flex flex-col ${sectionGap}`}>
            {/* MEDIA */}
            {media && (
              <Section title="Media">
                <Media media={media} />
              </Section>
            )}
            {links && (!features || !structure) && (
              <Section title="Project Links">
                <Links links={links} />
              </Section>
            )}
            {/* FEATURES */}
            {features && (
              <Section title="Features">
                <PortableText value={features} />
              </Section>
            )}
            {/* STRUCTURE */}
            {structure && (
              <Section title="Design / Tech">
                <Structure structure={structure} />
              </Section>
            )}
          </div>
        </div>
      </article>
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
