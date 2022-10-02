const SectionNav = ({ active }) => {
  const sections = [
    { title: "Projects", route: "/projects" },
    { title: "Writing", route: "/writing" },
    { title: "Play", route: "/play" },
  ];

  return (
    <nav className="flex justify-center py-4 lg:py-5 border-b border-gray-400 bg-gray-25 lg:border-b-2 w-full">
      <div className="flex justify-center gap-4 lg:gap-7 w-full max-w-screen-lg">
        {sections.map((s) => {
          const buttonType =
            active === s.title ? "btn-primary-selected" : "btn-secondary";
          return (
            <button
              key={s.title}
              className={"btn btn-xs lg:btn-sm-wide rounded-full " + buttonType}
            >
              {s.title}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SectionNav;
