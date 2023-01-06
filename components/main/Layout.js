import SiteHeader from "/components/site/Header";
import HeaderOffset from "/components/elements/HeaderOffset";
import Hero from "/components/main/Hero";
import Nav from "/components/main/Nav";
import Footer from "/components/site/Footer";

// TODO: Eventually make this only a Homepage layout

export default function MainLayout({ data, children, preview }) {
  return (
    <>
      {/* SITE HEADER FOR MOBILE AND SCREEN READERS HERE; INCLUDING ALL NAV LINKS IN ONE PLACE */}
      {/* To avoid having adjacent navigation, consider moving SiteHeader above footer in code */}
      {/* then rearranging it visually using flexbox order */}
      <SiteHeader type="main" />
      <HeaderOffset type="main" />
      <Hero as="section" />
      <Nav active={data.name} />
      {children}
      <Footer type="main" />
    </>
  );
}
