import type { ReactNode, ElementType } from 'react';

interface ContentColumnProps {
  id?: string;
  as?: ElementType;
  type?: string;
  children: ReactNode;
}

export default function ContentColumn({ id, as, type, children }: ContentColumnProps) {
  const Component = as ?? "div";

  return (
    <div id={id} className="flex flex-col items-center bg-white site-padding-x">
      <Component className="bg-white w-full max-w-[870px] min-h-[450px] pt-[40px] pb-[60px] lg:pt-[70px] lg:pb-[100px] 2k3:min-h-[550px]">
        {children}
      </Component>
    </div>
  );
}