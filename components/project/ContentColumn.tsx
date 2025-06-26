import HTMLComment from "react-html-comment";
import type { ReactNode, ElementType } from 'react';

interface ContentColumnProps {
    as?: ElementType;
    children: ReactNode;
}

export default function ContentColumn({ as, children }: ContentColumnProps) {
  const Component = as ?? "div";

  return (
    <>
      <HTMLComment text="CENTER COLUMN" />
      <div className="flex flex-col items-center bg-white site-padding-x">
        <HTMLComment text="CONTENT ITEM" />
        <Component className="project flex flex-col gap-14 sm:gap-24 bg-white w-full max-w-[870px] pt-[50px] lg:pt-[70px] pb-[60px] lg:pb-[100px] xl:max-w-screen-xl xl:flex-none xl:gap-40">
          {children}
        </Component>
      </div>
    </>
  );
}