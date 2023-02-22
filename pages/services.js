import PageLayout from "/components/page/Layout";
// import { getAboutPage } from "/lib/about";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function About({ data, preview = false }) {
  // const { coverImage, bio_full } = data;

  return (
    <PageLayout id="services" page="services">
      <h1 className="text-3xl text-black font-light -tracking-1 leading-tight mb-4">
        I Deliver Customer Happiness
      </h1>
      <article className="prose-lg lg:prose-xl">
        {/* {(() => {
          const content = bio_full.body;
          return <PortableText value={content} onMissingComponent={false} />;
        })()} */}
        {/* <p class="border-b border-gray-600">Here's how I can help you:</p> */}
        <p>Here's how:</p>
        <div className="mt-18 flex flex-col gap-24 mb-32 md:gap-0 md:mt-28 md:flex-row md:justify-between">
          <div class="md:flex md:flex-col md:justify-around">
            <ul id="tasks">
              <li>Content Strategy</li>
              <li>Product Design & Development</li>
            </ul>
            <div class="button hidden md:inline-flex">
              <Link href="/contact">Let's work together</Link>
            </div>
          </div>
          <div>
            <ul id="skills">
              <li>
                <b>
                  <u>Code</u>
                </b>
                : JavaScript, Elixir, CSS, HTML
              </li>
              <li>
                <b>
                  <u>Frameworks</u>
                </b>
                : Next.js, Phoenix
              </li>
              <li>
                <b>
                  <u>UI</u>
                </b>
                : React, LiveView, Tailwind, Alpine
              </li>
              <li>
                <b>
                  <u>CMS</u>
                </b>
                : Sanity, WordPress
              </li>
              <li>
                <b>
                  <u>Design</u>
                </b>
                : Figma, Illustrator, Photoshop
              </li>
              <li>
                <b>
                  <u>Testing</u>
                </b>
                : Sizzy
              </li>
            </ul>
          </div>
        </div>
        <div class="button inline-flex md:hidden">
          <Link href="/contact">Let's work together</Link>
        </div>
      </article>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // const data = await getAboutPage({ preview });

  return {
    props: {
      preview,
    },
  };
}
