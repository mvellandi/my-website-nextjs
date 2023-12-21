// --------------------------------------------------------------
// This component is used to process and display the process sections
// This could be a one of the following:
// * A section titled "Process" ("richText")
// * An outline ("outline")
// * An outline section ("headingRichText")
// --------------------------------------------------------------

import { PortableText } from "@portabletext/react";
import Section, { sectionHeadingStyle } from "./Section";
import ProcessOutline from "./ProcessOutline";
import ProcessSection from "./ProcessSection";
import { sectionGap } from "./Item";

export default function Process({ process, iteration }) {
  // NOTE: Because the parent Project component has a single column layout for mobile to lg sizes, and a two column layout for xl sizes, and the markup is duplicated. If there are anchor outline links to any of the process sections, the anchor links will be duplicated, and the links will point to the hidden sections and not work as intended. To fix this, we need to modify the markup for links and ids. We can do this by adding an iteration prop to the Process component, and then adding the iteration number to the id and href attributes. This will ensure that the links and ids are unique, and will work on both layouts.

  const processHeadingStyle = `${sectionHeadingStyle} scroll-mt-[15rem] sm:scroll-mt-[16.5rem] md:scroll-mt-[23rem] lg:scroll-mt-[26rem]`;
  return (
    <div className={`flex flex-col ${sectionGap}`}>
      {(() => {
        return process.map(({ _key, _type, ...rest }, n) => {
          if (_type === "richText") {
            return (
              <Section key={_key} title="Process">
                <PortableText value={rest.body} />
              </Section>
            );
          }

          if (_type === "outline") {
            return (
              <ProcessOutline
                key={_key}
                outline={rest}
                headingStyle={processHeadingStyle}
                iteration={iteration}
              />
            );
          }

          if (_type === "headingRichText") {
            return (
              <ProcessSection
                key={_key}
                section={rest}
                headingStyle={processHeadingStyle}
                iteration={iteration}
              />
            );
          }
        });
      })()}
    </div>
  );
}
