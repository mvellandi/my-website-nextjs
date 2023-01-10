import SiteHeader from "/components/site/Header";
import HeaderOffset from "/components/elements/HeaderOffset";
import SectionNav from "/components/section/Nav";
import ProjectColumn from "/components/project/ContentColumn";
import ContentColumn from "/components/elements/ContentColumn";
import Footer from "/components/site/Footer";

// SECTIONS ARE FOR MULTI-RECORD RESOURCES
export default function SectionLayout({ type, nav, children }) {
  const Column = type === "project" ? ProjectColumn : ContentColumn;

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
        <Column type={type} as="article">
          {children}
        </Column>
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
      <Footer type={type} />
    </>
  );
}
