// import Footer from '/components/site/Footer'
import Container from "/components/site/Container";
import SiteHeader from "/components/site/Header";
import SectionNav from "/components/section/Nav";
import Footer from "/components/site/Footer";

export default function Layout({ type, nav, children }) {
  return (
    <Container>
      <SiteHeader as="header" type={type} />
      <main className="item-content-y flex flex-col justify-center w-full">
        <SectionNav
          as="nav"
          place="top"
          type={nav.type}
          title={nav.title}
          path={nav.path}
          prev={nav.prev}
          next={nav.next}
        />
        {children}
        <SectionNav
          as="nav"
          place="bottom"
          type={nav.type}
          title={nav.title}
          path={nav.path}
          prev={nav.prev}
          next={nav.next}
        />
      </main>
      <Footer />
    </Container>
  );
}
