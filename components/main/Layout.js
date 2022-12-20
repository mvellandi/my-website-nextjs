// import Footer from '/components/site/Footer'
import Container from "/components/site/Container";
import SiteHeader from "/components/site/Header";
import Hero from "/components/main/Hero";
import Nav from "/components/main/Nav";
import Items from "/components/main/Items";
import Footer from "/components/site/Footer";

export default function Layout({ preview, data }) {
  return (
    <>
      <Container>
        <SiteHeader as="header" type="main" />
        <Hero as="section" />
        <main className="flex flex-col justify-center w-full">
          <Nav active={data.name} />
          <Items data={data} />
        </main>
        <Footer />
      </Container>
    </>
  );
}

// px-5 sm:px-8 md:px-10 xl:px-0
