import Head from "next/head";

export default function Meta({ data }) {
  data = data || {
    title: "Mario Vellandi: Digital Product Development and Content Strategy",
    description:
      "Portfolio, services offered, articles, and quick projects by Mario Vellandi",
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
      {/* SET URL BAR AREA COLOR */}
      {/* WORKS EVERYWHERE, THOUGH APPLE ONLY ALLOWS FOR WEB APPS */}
      <meta name="theme-color" content="#c93b53" />
      {/*  */}
      {/* WEB APP SETTINGS */}
      {/* allow fullscreen for android and ios */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {/* OTHER SETTINGS */}
      {/* --- APPLE */}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Vellandi" />
      {/* --- ANDROID */}
      <link rel="manifest" href="/meta/site.webmanifest" />
      {/*  */}
      {/* MS Edge */}
      {/* browser pinned sites */}
      <meta name="msapplication-TileColor" content="#c93b53" />
      {/* other Edge settings */}
      {/* <meta name="msapplication-config" content="/meta/browserconfig.xml" /> */}
      {/*  */}
      {/* RSS FEED */}
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      {/* OPEN GRAPH IMAGE URL */}
      {/* can be dynamically set by the host? */}
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
