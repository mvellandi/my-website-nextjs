import Head from "next/head";

export default function Meta({ data }) {
  data = data || {
    title: "Next.js Sample Webpage",
    description:
      "A statically generated blog example using Next.js and Sanity CMS",
  };
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/site.webmanifest" />
      {/* this sets the color of url bar */}
      <meta name="theme-color" content="#c93b53" />
      {/* sets the color of url bar in Apple phones */}
      <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      {/* <link
        rel="mask-icon"
        href="/meta/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/meta/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="shortcut icon" href="/meta/favicon.ico" />
    </Head>
  );
}
