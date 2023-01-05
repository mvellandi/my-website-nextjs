import SiteHeader from "/components/site/Header";
import HeaderOffset from "/components/elements/HeaderOffset";
import SectionNav from "/components/section/Nav";
import ContentColumn from "/components/elements/ContentColumn";
import Footer from "/components/site/Footer";

// SECTIONS ARE FOR MULTI-RECORD RESOURCES
export default function SectionLayout({ type, nav, children }) {
  return (
    <>
      <SiteHeader type={type} />
      <HeaderOffset type={type} />
      <SectionNav
        aria-label={type}
        as="nav"
        place="top"
        type={nav.type}
        title={nav.title}
        path={nav.path}
        prev={nav.prev}
        next={nav.next}
      />
      <main>
        <ContentColumn type={type} as="article">
          {children}
        </ContentColumn>
      </main>
      <SectionNav
        aria-label={type}
        as="nav"
        place="bottom"
        type={nav.type}
        title={nav.title}
        path={nav.path}
        prev={nav.prev}
        next={nav.next}
      />
      <Footer />
    </>
  );
}
