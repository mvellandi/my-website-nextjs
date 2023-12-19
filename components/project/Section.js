// --------------------------------------------------------------
// Project sections are wrappers for:
// * Static or dynamic text blocks with unknown content
// * A custom section (links, structure, features, etc.)
// --------------------------------------------------------------

import cn from "classnames";

export const sectionHeadingStyle =
  "mb-4 text-xl font-bold text-orange lg:text-xl lg:mb-6";

export default function Section({ title, className, children }) {
  className ??= "standard";
  const componentProps = {
    className: cn("section", className),
  };

  return (
    <section {...componentProps}>
      {/* HEADER */}
      <h2 className={sectionHeadingStyle}>{title}</h2>
      {/* BODY */}
      {children}
    </section>
  );
}
