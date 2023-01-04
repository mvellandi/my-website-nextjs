import SiteHeader from "/components/site/Header";
import HeaderOffset from "/components/site/HeaderOffset";
import Hero from "/components/main/Hero";
import Nav from "/components/main/Nav";
import Items from "/components/main/Items";
import Footer from "/components/site/Footer";

export default function Layout({ preview, data }) {
  return (
    <>
      <SiteHeader as="header" type="main" />
      <HeaderOffset type="main" />
      <Hero as="section" />
      <main className="flex flex-col justify-center w-full">
        <Nav active={data.name} />
        <Items data={data} />
      </main>
      <Footer />
    </>
  );
}
