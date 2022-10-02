import Head from "next/head";
import Hero from "/components/Hero";
import SectionNav from "/components/SectionNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Media and Content Design by Mario Vellandi</title>
        <meta name="description" content="meta content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* Nav component with props indicating active button */}
      <SectionNav active="Projects" />
      <section className="py-4">Hola Hola</section>
    </>
  );
}
