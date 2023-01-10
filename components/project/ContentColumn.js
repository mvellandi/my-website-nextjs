export default function ContentColumn({ as, type, children }) {
  const Component = as || "div";

  return (
    <div className="flex flex-col items-center bg-white site-padding-x">
      <Component className="flex flex-col gap-40 md:gap-56 bg-white w-full max-w-[870px] pt-[50px] lg:pt-[80px] pb-[60px] lg:pb-[100px] xl:max-w-screen-xl xl:flex-none">
        {children}
      </Component>
    </div>
  );
}
