import SiteHeader from "/components/site/Header";
import "/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // Column centered wrapper
    <div className="flex flex-col items-center bg-white">
      <SiteHeader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
