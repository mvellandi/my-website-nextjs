// --------------------------------------------------------------
// This component is used to create a section in the project page.
// This could be a one of the following:
// * A independent section
// * An outline
// * An outline section
// --------------------------------------------------------------

import { sectionGap } from "./Item";

function idAnchor(string) {
  return string
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export default function Section({
  key,
  isOutline,
  isOutlineSection,
  title,
  children,
}) {
  // If the section is an outline, then it will have a different style
  isOutline ??= false;
  isOutlineSection ??= false;
  // Root component type
  const Component = isOutline ? "nav" : "section";
  // Get the name of the child component
  const childType = children.type.name || children.type;
  // styles
  const headingStyle = `mb-4 text-xl font-bold text-orange lg:text-xl lg:mb-6 ${
    isOutline || isOutlineSection
      ? "scroll-mt-[15rem] sm:scroll-mt-[16.5rem] md:scroll-mt-[23rem] lg:scroll-mt-[26rem]"
      : ""
  }`;

  return (
    <Component key={key}>
      {/* ---------------- */}
      {/* HEADER */}
      {/* ---------------- */}
      {/* --- INDEPENDENT SECTION OR OUTLINE */}
      {(!isOutlineSection || isOutline) && (
        <h2 className={headingStyle}>{title}</h2>
      )}
      {/* --- OUTLINE SECTION */}
      {isOutlineSection && (
        <div className={`flex items-start justify-between`}>
          <h2
            id={idAnchor(title)}
            className={`${headingStyle} scroll-mt-[15rem] sm:scroll-mt-[16.5rem] md:scroll-mt-[23rem] lg:scroll-mt-[26rem]`}
          >
            {title}
          </h2>
          <div
            className="block pl-20 text-sm text-gray-400 min-w-[120px] xl:hidden"
            aria-hidden
          >
            <a href="#" className="text-link">
              top
            </a>{" "}
            |{" "}
            <a href="#outline" className="text-link">
              outline
            </a>
          </div>
        </div>
      )}
      {/* ---------------- */}
      {/* BODY */}
      {/* ---------------- */}
      {/* --- INDEPENDENT SECTION */}
      {(() => {
        if (!isOutline && !isOutlineSection) {
          if (childType === "Media") {
            return children;
          } else {
            return <div className="body">{children}</div>;
          }
        }
      })()}
      {/* --- OUTLINE OR OUTLINE SECTION */}
      {(isOutline || isOutlineSection) && (
        <div
          className={`
          ${sectionGap} 
          ${isOutlineSection && "body"}
          mt-${isOutline ? "4" : "3"} 
          ${
            isOutline &&
            "[&>ol]:space-y-6 [&>ol>li>a]:text-lg [&>ol>li>a]:no-underline"
          }
        `}
        >
          {children}
        </div>
      )}
    </Component>
  );
}
