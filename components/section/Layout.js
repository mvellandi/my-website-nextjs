// import Footer from '/components/site/Footer'
import Container from "/components/site/Container";
import SiteHeader from "/components/site/Header";

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <SiteHeader as="header" />
        <main className="flex flex-col justify-center w-full">{children}</main>
        {/* <Footer /> */}
      </Container>
    </>
  );
}
