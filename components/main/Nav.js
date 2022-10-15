const Nav = ({ active, as }) => {
  const Component = as || "div";
  let sections = [
    { title: "Projects", route: "/", viewOrder: 1, isActive: false },
    { title: "Writing", route: "/writing", viewOrder: 2, isActive: false },
    { title: "Play", route: "/play", viewOrder: 3, isActive: false },
  ];
  const activeIdx = sections.findIndex((section) => section.title === active);
  let activeSection = sections[activeIdx];
  activeSection.isActive = true;
  sections.splice(activeIdx, 1);
  sections.push(activeSection);
  console.log("sections:\n", sections);

  return (
    // NAV BACKGROUND + CONTENT ROW: h-centered child at full-width
    <Component className="flex justify-center w-full border-b border-gray-400 bg-gray-25 lg:border-b-2 bord-blue">
      <div className="flex justify-center gap-4 lg:gap-7 w-full max-w-screen-lg py-4 lg:py-5">
        {sections.map(({ title, route, viewOrder, isActive }) => {
          const Element = isActive ? "h1" : "a";
          let attributes = {
            className: `btn btn-xs lg:btn-sm-wide rounded-full ${
              isActive ? "btn-primary-selected" : "btn-secondary"
            }`,
          };
          if (!isActive) {
            attributes["href"] = `${route}`;
          }
          return (
            <div key={title} className={`order-${viewOrder}`}>
              <Element {...attributes}>{title}</Element>
            </div>
          );
        })}
      </div>
    </Component>
  );
};

export default Nav;
