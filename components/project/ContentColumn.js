export default function ContentColumn({ as, children }) {
  const Component = as || "div";

  return (
    <div className="flex flex-col items-center bg-white site-padding-x">
      <Component
        id="project"
        className="flex flex-col gap-28 md:gap-40 bg-white w-full max-w-[870px] pt-[50px] lg:pt-[80px] pb-[60px] lg:pb-[100px] xl:max-w-screen-xl xl:flex-none xl:gap-52"
      >
        {children}
      </Component>
    </div>
  );
}
