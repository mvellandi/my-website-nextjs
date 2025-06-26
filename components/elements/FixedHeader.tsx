import HTMLComment from "react-html-comment";
import type { ReactNode } from 'react';

interface FixedHeaderProps {
  children: ReactNode;
}

export default function FixedHeader({ children }: FixedHeaderProps) {
  return (
    <>
      <HTMLComment text="FIXED HEADER AND NAVIGATION" />
      <div className="fixed z-20 w-full">{children}</div>
    </>
  );
}