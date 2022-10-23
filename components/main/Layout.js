// import Footer from '/components/site/Footer'
// import Meta from '/components/meta'
import SiteHeader from "/components/site/Header";
import Hero from "/components/main/Hero";
import Nav from "/components/main/Nav";
import Items from "/components/main/Items";

export default function Layout({ preview, data, children }) {
  return (
    <>
      {/* Meta content as related to homepage and all item index pages using this Layout <Meta /> */}
      {/* // Column centered wrapper */}
      <div className="flex flex-col items-center bg-white">
        {children}
        <SiteHeader />
        <Hero as="section" />
        <main className="flex flex-col justify-center w-full">
          <Nav active={data.name} />
          <Items data={data} />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
