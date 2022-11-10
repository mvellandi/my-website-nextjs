// import Footer from '/components/site/Footer'
import Container from "/components/site/Container";
import SiteHeader from "/components/site/Header";
import SectionNav from "/components/section/Nav";

export default function Layout({ nav, children }) {
  return (
    <>
      <Container>
        <SiteHeader as="header" />
        <main className="flex flex-col justify-center w-full">
          <SectionNav
            as="nav"
            place="top"
            sectionTitle={nav.title}
            route={nav.route}
            prev={nav.prev}
            next={nav.next}
          />
          {children}
        </main>
        {/* <Footer /> */}
      </Container>
    </>
  );
}
