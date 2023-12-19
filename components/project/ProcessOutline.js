import { PortableText } from "@portabletext/react";

export default function ProcessOutline({ outline, headingStyle }) {
  return (
    <nav className="nav processOutline" aria-label="Process Outline">
      <h2 id="outline" className={headingStyle}>
        {outline.heading}
      </h2>
      <PortableText value={outline.body} />
    </nav>
  );
}
