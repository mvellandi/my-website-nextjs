import { PortableText } from "@portabletext/react";

// NOTE: We're modifying the markup for the outline links to match the markup for the outline links in the ProcessSection component. This is so that the links will work on both the single column layout (mobile to lg sizes) and the two column layout (xl sizes).

function processOutlineLinks(body, iteration) {
  return body
    .filter((item) => item?.listItem === "number")
    .map((item) => {
      // Realistically, there should only be one child, but we'll handle multiple children just in case
      let [first_child, rest] = [item.markDefs.at(0), item.markDefs.slice(1)];
      if (first_child.href) {
        // NOTE: Either in a dev environment or in production if there's multiple re-renders and the outline is getting mutated, we need to make sure that we're not adding the iteration number to the href value multiple times.
        // So we get the href value, retrieve the text value from the beginning of the string up to and excluding the first hyphen followed by a number, and then add the iteration number to the end of the string.
        let href = first_child.href;
        let text = href.replace(/(-\d+)*$/, "");
        first_child.href = `${text}-${iteration}`;
      }
      return { ...item, markDefs: [first_child, ...rest] };
    });
}

export default function ProcessOutline({ outline, headingStyle, iteration }) {
  return (
    <nav className="nav processOutline" aria-label="Process Outline">
      <h2 className={headingStyle}>{outline.heading}</h2>
      <PortableText value={processOutlineLinks(outline.body, iteration)} />
    </nav>
  );
}
