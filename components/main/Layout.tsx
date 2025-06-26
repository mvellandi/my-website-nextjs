import Header from "../site/Header";
import Hero from "./Hero";
import Nav from "./Nav";
import Footer from "../site/Footer";
import HTMLComment from "react-html-comment";
import type { ReactNode } from 'react';

interface MainLayoutProps {
    data: {
        name: string;
    };
    children: ReactNode;
    preview?: boolean;
}

export default function MainLayout({ data, children, preview }: MainLayoutProps) {
  return (
    <>
      <HTMLComment text="MAIN LAYOUT" />
      <HTMLComment text="-------------" />
      <Header type="main" />
      <div className="main">
        <HTMLComment text="HERO SECTION" />
        <Hero as="section" />
        <HTMLComment text="CONTENT TYPE NAVIGATION" />
        <Nav active={data.name} />
        {children}
        <Footer type="main" />
      </div>
    </>
  );
}