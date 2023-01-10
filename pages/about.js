import PageLayout from "/components/page/Layout";
import { getAboutPage } from "/lib/about";
import { PortableText } from "@portabletext/react";

export default function About({ data, preview = false }) {
  const { coverImage, bio_full } = data;

  return (
    <PageLayout page="about">
      <h1 className="text-3xl text-black font-light -tracking-1 leading-tight mb-20 lg:mb-40">
        About Me
      </h1>
      <div className="prose-lg lg:prose-xl">
        {(() => {
          const content = bio_full.body;
          return <PortableText value={content} onMissingComponent={false} />;
        })()}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getAboutPage({ preview });

  return {
    props: {
      data,
      preview,
    },
  };
}
