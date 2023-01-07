import PageLayout from "/components/page/Layout";

export default function About({ preview = false }) {
  return (
    <PageLayout>
      <h1 className="text-3xl text-black font-light -tracking-1 leading-tight">
        About Me
      </h1>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      preview,
    },
  };
}
