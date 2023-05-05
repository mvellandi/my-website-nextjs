export default function ContentColumn({ id, as, type, children }) {
  const Component = as || "div";

  return (
    <div id={id} className="flex flex-col items-center bg-white site-padding-x">
      <Component className="bg-white w-full max-w-[870px] min-h-[450px] pt-[50px] lg:pt-[80px] pb-[60px] lg:pb-[100px] 2k3:min-h-[550px]">
        {children}
      </Component>
    </div>
  );
}
