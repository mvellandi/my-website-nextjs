import SiteHeader from "/components/site/Header";
import HeaderOffset from "/components/elements/HeaderOffset";
import ContentColumn from "/components/elements/ContentColumn";
import Footer from "/components/site/Footer";

// PAGES ARE FOR SINGLE-RECORD RESOURCES (e.g. /about) AND FOR STATIC PAGES (e.g. /contact)
export default function PageLayout({ children }) {
  return (
    <>
      <SiteHeader type="page" />
      <HeaderOffset type="page" />
      <ContentColumn>{children}</ContentColumn>
      <Footer type="page" />
    </>
  );
}
