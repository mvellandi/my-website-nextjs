import Head from "next/head";
import Hero from "/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Media and Content Design by Mario Vellandi</title>
        <meta name="description" content="meta content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <nav className="flex justify-center py-4 lg:py-5 border-b border-gray-400 bg-gray-25 lg:border-b-2 w-full">
        <div className="flex justify-center gap-4 lg:gap-7 w-full max-w-screen-lg">
          <button className="btn btn-xs btn-primary-selected cursor-default rounded-full lg:btn-sm-wide">
            Projects
          </button>
          <button className="btn btn-xs lg:btn-sm-wide btn-secondary rounded-full">
            Writing
          </button>
          <button className="btn btn-xs lg:btn-sm-wide btn-secondary rounded-full">
            Play
          </button>
        </div>
      </nav>
      <section className="py-4">Hola</section>
    </>
  );
}
