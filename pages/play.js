import Head from "next/head";
import MainLayout from "/components/main/Layout";
import { getAllToyCards } from "/lib/toy";

export default function Home({ data, preview }) {
  return (
    <>
      <MainLayout preview={preview} data={data}>
        {/* Meta content as related to toys */}
        <Head>
          <title>Media and Content Design by Mario Vellandi</title>
          <meta name="description" content="meta content description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getAllToyCards(preview);
  return {
    props: {
      data,
      preview,
    },
    revalidate: 1,
  };
}
