import Meta from "/components/site/Meta";
import MainLayout from "/components/main/Layout";
import Items from "/components/main/Items";
import { getAllProjectCards } from "/lib/project";

// TODO: Change the layout to list all section items, in 3 separate lists

export default function Projects({ data, preview }) {
  return (
    <>
      <Meta data={null} />
      <MainLayout preview={preview} data={data}>
        <Items as="main" data={data} />
      </MainLayout>
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
