import Header from "../site/Header";
import Hero from "/components/main/Hero";
import Nav from "/components/main/Nav";
import Footer from "/components/site/Footer";
import HTMLComment from "react-html-comment";

export default function MainLayout({ data, children, preview }) {
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
