// --------------------------------------------------------------
// This component is used to process and display the process sections
// This could be a one of the following:
// * A section titled "Process" ("richText")
// * An outline ("outline")
// * An outline section ("headingRichText")
// --------------------------------------------------------------

import { PortableText } from "@portabletext/react";
import Section from "./Section";
import { sectionGap } from "./Item";

export default function Process({ process }) {
  return (
    <div className={`flex flex-col ${sectionGap}`}>
      {(() => {
        return process.map(({ _key, _type, ...rest }, n) => {
          // Reset variables for each iteration
          let isOutline = false;
          let isOutlineSection = false;
          let componentProps = {};

          if (_type === "richText") {
            return (
              <Section key={_key} title="Process">
                <PortableText value={rest.body} />
              </Section>
            );
          }

          if (_type === "outline") {
            isOutline = true;
            componentProps = {
              "aria-label": "Project Outline",
            };
          } else if (_type === "headingRichText") {
            isOutlineSection = true;
          }

          return (
            <Section
              key={_key}
              isOutline={isOutline}
              isOutlineSection={isOutlineSection}
              title={rest.heading}
              {...componentProps}
            >
              <PortableText value={rest.body} />
            </Section>
          );
        });
      })()}
    </div>
  );
}
