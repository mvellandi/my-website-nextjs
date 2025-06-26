// --------------------------------------------------------------
// Project sections are wrappers for:
// * Static or dynamic text blocks with unknown content
// * A custom section (links, structure, features, etc.)
// --------------------------------------------------------------

import cn from "classnames";
import type { ReactNode } from 'react';

interface SectionProps {
    title: string;
    className?: string;
    children: ReactNode;
}

export default function Section({ title, className, children }: SectionProps) {
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