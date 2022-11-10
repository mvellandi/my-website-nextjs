import Meta from "/components/site/Meta";
import MainLayout from "/components/main/Layout";
import { getAllProjectCards } from "/lib/project";

export default function Home({ data, preview }) {
  return (
    <>
      <Meta data={null} />
      <MainLayout preview={preview} data={data} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getAllProjectCards({ preview });
  return {
    props: {
      data,
      preview,
    },
    revalidate: 1,
  };
}
