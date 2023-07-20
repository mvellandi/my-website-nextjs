import PageLayout from "/components/page/Layout";
// import { getAboutPage } from "/lib/about";
// import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function About({ data, preview = false }) {
  // const { coverImage, bio_full } = data;

  return (
    <PageLayout id="services" page="services">
      {/* <h1 className="text-3xl text-black font-light -tracking-1 leading-tight mb-4">
        I Deliver Customer Happiness
      </h1> */}
      <h1 className="text-[3.6rem] text-black font-light -tracking-1 leading-tight mb-20 lg:mb-40">
        Services
      </h1>
      <article className="prose-lg lg:prose-xl">
        {/* {(() => {
          const content = bio_full.body;
          return <PortableText value={content} onMissingComponent={false} />;
        })()} */}
        {/* <p className="border-b border-gray-600">Here's how I can help you:</p> */}
        {/* <p>Here&rsquo;s how:</p> */}
        {/* <div className="mt-18 flex flex-col gap-24 mb-32 md:gap-0 md:mt-28 md:flex-row md:justify-between">
          <div className="md:flex md:flex-col md:justify-around">
            <ul id="tasks">
              <li>Content Strategy</li>
              <li>Product Design & Development</li>
            </ul>
            <div className="button hidden md:inline-flex">
              <Link href="/contact">Let&rsquo;s work together</Link>
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
        <div className="button inline-flex md:hidden">
          <Link href="/contact">Let&rsquo;s work together</Link>
        </div> */}
        {/* <div className="not-prose -mb-20">
          <span className="text-xl"></span>
        </div> */}
        <p>
          If urgent, I&rsquo;ll jump in to help you with customer service,
          copywriting, documentation, and web development using JavaScript, CSS,
          and HTML.
        </p>
        <p>
          With more time, I&rsquo;ll conduct audits, do competitive analyses,
          and help with strategy and planning.
        </p>
        <div className="not-prose my-24">
          <p className="text-lg font-bold lg:font-medium lg:text-2xl">
            A great customer experience is all that matters
          </p>
        </div>
        <p>
          I&rsquo;m most skilled with Figma, Next.js, React, Tailwind CSS,
          Sanity CMS, and Sizzy.
        </p>
        <p>
          Additional skills include Elixir, Phoenix, Wordpress, and Illustrator
          among others.
        </p>
        <p>
          Let me know how I can help you. I am always open to new projects and
          challenges.
        </p>
        <p>
          <span className="obfuscate">ten.idnallev@vaoiram</span>
        </p>
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
