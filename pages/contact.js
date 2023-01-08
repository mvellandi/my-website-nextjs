import PageLayout from "/components/page/Layout";

export default function Contact({ preview = false }) {
  return (
    <PageLayout page="contact">
      <h1 className="text-3xl text-black font-light -tracking-1 leading-tight">
        Contact
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
