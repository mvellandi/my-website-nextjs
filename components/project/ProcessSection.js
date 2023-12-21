import { PortableText } from "@portabletext/react";

function idAnchor(string) {
  return string
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export default function ProcessSection({ section, headingStyle, iteration }) {
  return (
    <section className="section standard">
      {/* HEADING WITH QUICK NAVIGATION FOR SMALLER SCREENS */}
      <div className={`flex items-start justify-between`}>
        <h2
          id={`${idAnchor(section.heading)}-${iteration}`}
          className={headingStyle}
        >
          {section.heading}
        </h2>
        <div
          className="flex flex-col justify-end mt-auto xl:hidden"
          aria-hidden="true"
        >
          <div className="pl-20 pb-6 text-sm text-gray-400 min-w-[120px]">
            <a href="#" className="text-link">
              top
            </a>{" "}
            |{" "}
            <a href="#outline" className="text-link">
              outline
            </a>
          </div>
        </div>
      </div>
      {/* BODY */}
      <PortableText value={section.body} />
    </section>
  );
}
