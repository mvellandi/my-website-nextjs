// import Footer from '/components/site/Footer'
import Container from "/components/site/Container";
import SiteHeader from "/components/site/Header";
import Footer from "/components/site/Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <SiteHeader as="header" type="page" />
      <main className="item-content-y flex flex-col justify-center w-full">
        {children}
      </main>
      <Footer />
    </Container>
  );
}
