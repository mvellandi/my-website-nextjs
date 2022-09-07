import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Media and Content Design by Mario Vellandi</title>
        <meta name="description" content="meta content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="btn-lg rounded">Hello</h1>

        <p className="">This is a description</p>
      </main>
      <section>section</section>
    </>
  );
}
