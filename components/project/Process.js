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

export default function Process({ process }) {
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
              />
            );
          }

          if (_type === "headingRichText") {
            return (
              <ProcessSection
                key={_key}
                section={rest}
                headingStyle={processHeadingStyle}
              />
            );
          }
        });
      })()}
    </div>
  );
}
