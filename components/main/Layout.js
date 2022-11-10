// import Footer from '/components/site/Footer'
import Container from "/components/site/Container";
import SiteHeader from "/components/site/Header";
import Hero from "/components/main/Hero";
import Nav from "/components/main/Nav";
import Items from "/components/main/Items";

export default function Layout({ preview, data }) {
  return (
    <>
      <Container>
        <SiteHeader as="header" />
        <Hero as="section" />
        <main className="flex flex-col justify-center w-full">
          <Nav active={data.name} />
          <Items data={data} />
        </main>
        {/* <Footer /> */}
      </Container>
    </>
  );
}
