import API from "/lib/api";
import Link from "next/link";

export default function Nav({ active, as }) {
  const Component = as || "div";

  // Get all sections from API
  let sections = Object.values(API).map((v) => ({
    ...v,
    isActive: false,
  }));

  // Find and set active section
  const activeIdx = sections.findIndex((section) => section.name === active);
  sections[activeIdx].isActive = true;
  let activeSection = sections[activeIdx];

  // modify "projects" section's route to "/" for homepage
  const projectsIdx = sections.findIndex(
    (section) => section.name === "project"
  );
  sections[projectsIdx].route = "/";

  // Reorder sections CODE to place:
  // - inactive sections first, as Links
  // - active section last, as h1
  // This is to establish semantic hierarchy based on the current active page
  // However, the visual display and order of the links is not affected.
  sections.splice(activeIdx, 1);
  sections.push(activeSection);

  return (
    // NAV BACKGROUND + CONTENT ROW: h-centered child at full-width
    <Component className="flex justify-center w-full border-b border-gray-400 bg-gray-25 lg:border-b-2">
      <div className="flex justify-center py-16 gap-16 w-full max-w-screen-lg sm:gap-24 md:gap-28 md:py-20 lg:gap-32 xl:py-[18px] xl:gap-40 2k:py-24">
        {sections.map(({ title, route, navOrder, isActive }) => {
          let Element;
          let style = {
            className: `btn btn-sm sm:btn-md-wide lg:btn-lg-wide rounded-full ${
              isActive ? "btn-primary-selected" : "btn-secondary"
            }`,
          };
          if (isActive) {
            Element = <h1 {...style}>{title}</h1>;
          }
          if (!isActive) {
            Element = (
              <Link href={route}>
                <a {...style}>{title}</a>
              </Link>
            );
          }
          return (
            <div key={title} className={`order-${navOrder}`}>
              {Element}
            </div>
          );
        })}
      </div>
    </Component>
  );
}
