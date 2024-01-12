// --------------------------------------------------------------
// Project sections are wrappers for:
// * Static or dynamic text blocks with unknown content
// * A custom section (links, structure, features, etc.)
// --------------------------------------------------------------

import cn from "classnames";

export default function Section({ title, className, children }) {
  className ??= "standard";
  const componentProps = {
    className: cn("section", className),
  };

  return (
    <section {...componentProps}>
      {/* HEADER */}
      <h2 className="heading">{title}</h2>
      {/* BODY */}
      {children}
    </section>
  );
}
