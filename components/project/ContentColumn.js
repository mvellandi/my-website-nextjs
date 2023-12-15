export default function ContentColumn({ as, children }) {
  const Component = as ?? "div";

  return (
    <div className="flex flex-col items-center bg-white site-padding-x">
      <Component
        id="project"
        className="flex flex-col gap-24 md:gap-28 bg-white w-full max-w-[870px] pt-[50px] lg:pt-[70px] pb-[60px] lg:pb-[100px] xl:max-w-screen-xl xl:flex-none xl:gap-40"
      >
        {children}
      </Component>
    </div>
  );
}
