import Meta from "/components/site/Meta";
import MainLayout from "/components/main/Layout";
import { getAllToyCards } from "/lib/toy";

export default function Play({ data, preview }) {
  return (
    <>
      <Meta data={null} />
      <MainLayout preview={preview} data={data} />
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