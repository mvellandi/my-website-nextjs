// --------------------------------------------------------------
// This component is used to process and display the process sections
// This could be a one of the following:
// * A section titled "Process" ("richText")
// * An outline ("outline")
// * An outline section ("headingRichText")
// --------------------------------------------------------------

import { PortableText } from "@portabletext/react";
import Section from "./Section";
import { sectionHeadingStyle } from "./Item";
import ProcessOutline from "./ProcessOutline";
import ProcessSection from "./ProcessSection";
import { sectionGap } from "./Item";

// Types for process items
type PortableTextBlock = any; // Using any for now as PortableText has complex nested types

interface ProcessRichText {
  _key: string;
  _type: 'richText';
  body: PortableTextBlock[];
}

interface ProcessOutlineItem {
  _key: string;
  _type: 'outline';
  heading: string;
  body: PortableTextBlock[];
}

interface ProcessHeadingRichText {
  _key: string;
  _type: 'headingRichText';
  heading: string;
  body: PortableTextBlock[];
}

type ProcessItem = ProcessRichText | ProcessOutlineItem | ProcessHeadingRichText;

interface ProcessProps {
  process: ProcessItem[];
  iteration: string;
}

const scrollMargin =
  "scroll-mt-[15rem] sm:scroll-mt-[16.5rem] md:scroll-mt-[23rem] lg:scroll-mt-[26rem]";

export default function Process({ process, iteration }: ProcessProps) {
  // NOTE: Because the parent Project component has a single column layout for mobile to lg sizes, and a two column layout for xl sizes, and the markup is duplicated. If there are anchor outline links to any of the process sections, the anchor links will be duplicated, and the links will point to the hidden sections and not work as intended. To fix this, we need to modify the markup for links and ids. We can do this by adding an iteration prop to the Process component, and then adding the iteration number to the id and href attributes. This will ensure that the links and ids are unique, and will work on both layouts.

  return (
    <div
      id={`outline-${iteration}`}
      className={`flex flex-col ${sectionGap} scroll_margin`}
    >
      {(() => {
        return process.map((item, n) => {
          const { _key, _type, ...rest } = item;
          
          if (_type === "richText") {
            const richTextItem = item as ProcessRichText;
            return (
              <Section key={_key} title="Process">
                <PortableText value={richTextItem.body} />
              </Section>
            );
          }

          if (_type === "outline") {
            const outlineItem = item as ProcessOutlineItem;
            return (
              <ProcessOutline 
                key={_key} 
                outline={{
                  heading: outlineItem.heading,
                  body: outlineItem.body
                }} 
                iteration={iteration} 
              />
            );
          }

          if (_type === "headingRichText") {
            const headingRichTextItem = item as ProcessHeadingRichText;
            return (
              <ProcessSection 
                key={_key} 
                section={{
                  heading: headingRichTextItem.heading,
                  body: headingRichTextItem.body
                }} 
                iteration={iteration} 
              />
            );
          }

          return null;
        });
      })()}
    </div>
  );
}