import { PortableText } from "@portabletext/react";

// Types for PortableText content
type PortableTextBlock = any; // Using any for now as PortableText has complex nested types

interface MarkDef {
  href?: string;
  [key: string]: any;
}

interface OutlineItem extends PortableTextBlock {
  listItem?: string;
  markDefs: MarkDef[];
}

interface OutlineData {
  heading: string;
  body: PortableTextBlock[];
}

interface ProcessOutlineProps {
  outline: OutlineData;
  iteration: string;
}

// NOTE: We're modifying the markup for the outline links to match the markup for the outline links in the ProcessSection component. This is so that the links will work on both the single column layout (mobile to lg sizes) and the two column layout (xl sizes).

function processOutlineLinks(body: PortableTextBlock[], iteration: string): PortableTextBlock[] {
  return body
    .filter((item: OutlineItem) => item?.listItem === "number")
    .map((item: OutlineItem) => {
      // Realistically, there should only be one child, but we'll handle multiple children just in case
      let [first_child, ...rest] = item.markDefs;
      if (first_child && first_child.href) {
        // NOTE: Either in a dev environment or in production if there's multiple re-renders and the outline is getting mutated, we need to make sure that we're not adding the iteration number to the href value multiple times.
        // So we get the href value, retrieve the text value from the beginning of the string up to and excluding the first hyphen followed by a number, and then add the iteration number to the end of the string.
        let href = first_child.href;
        let text = href.replace(/(-\d+)*$/, "");
        first_child.href = `${text}-${iteration}`;
      }
      return { ...item, markDefs: [first_child, ...rest] };
    });
}

export default function ProcessOutline({ outline, iteration }: ProcessOutlineProps) {
  return (
    <nav className="section process_outline" aria-label="Process Outline">
      <h2 className="heading">{outline.heading}</h2>
      <PortableText value={processOutlineLinks(outline.body, iteration)} />
    </nav>
  );
}