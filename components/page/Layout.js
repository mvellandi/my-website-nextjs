import SiteHeader from "/components/site/Header";
import FixedHeader from "/components/elements/FixedHeader";
import FixedHeaderOffset from "/components/elements/FixedHeaderOffset";
import ContentColumn from "/components/elements/ContentColumn";
import Footer from "/components/site/Footer";

// PAGES ARE FOR SINGLE-RECORD RESOURCES (e.g. /about) AND FOR STATIC PAGES (e.g. /contact)
export default function PageLayout({ id, page, children }) {
  return (
    <>
      <FixedHeader>
        <SiteHeader type="page" page={page} />
      </FixedHeader>
      <FixedHeaderOffset type="page" />
      <ContentColumn id={id}>{children}</ContentColumn>
      <Footer type="page" />
    </>
  );
}
