import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Media and Content Design by Mario Vellandi</title>
        <meta name="description" content="meta content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <button className="btn btn-primary btn-xs">menu</button>
        <button className="btn btn-xs btn-primary">menu</button>
        <button className="btn btn-secondary btn-xs">menu</button>
        <div className="flex space-x-2 items-center">
          <button className="btn btn-primary btn-xs">menu</button>
          <button className="btn btn-primary btn-xs">menu</button>
          <button className="btn btn-primary btn-xs-wide">menu</button>
          <button className="btn btn-primary btn-sm">menu</button>
          <button className="btn btn-primary btn-sm">menu</button>
          <button className="btn btn-primary btn-sm-wide">menu</button>
          <button className="btn btn-primary btn-md">menu</button>
          <button className="btn btn-primary btn-md">menu</button>
          <button className="btn btn-primary btn-md-wide">menu</button>
        </div>
        <button className="border-purple-700 border-4 p-4 rounded-2xl">
          Hola
        </button>
      </main>
    </>
  );
}
