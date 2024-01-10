import Image from "next/image";
import Link from "next/link";
import portrait from "/public/mario-portrait-fall-225.jpg";
import HTMLComment from "react-html-comment";
import localFont from "next/font/local";

// const lora = localFont({
//   src: "../../fonts/lora/Lora-VariableFont_wght.ttf"
// });

const imageStyle = {
  borderRadius: "9999px",
  border: "1px solid #980F0F",
  filter: "drop-Shadow(0 5px 12px rgba(62, 17, 17, 0.4)",
};

export default function Hero({ as }) {
  const Component = as ?? "div";
  return (
    <div className="relative flex justify-center w-full border-b-8 bg-red border-red-shade site-padding-x">
      {/* SECTION BACKGROUND + CONTENT ROW: full-width, h-centered children */}
      <div className="flex flex-col w-full max-w-screen-xl gap-24 bord-blue">
        <Component className="relative flex justify-center w-full max-w-screen-xl gap-16 pt-48 pb-24 text-white hero sm:gap-48 md:pb-32 md:pt-28 lg:pt-28 lgtall:pt-28 lgtall:pb-40 xl:gap-52 2k:pb-48 2k:pt-28">
          <HTMLComment text="HERO TEXT" />
          <div className="w-full flex flex-col justify-center gap-24 md:w-[380px] md:gap-44 lg:w-[330px] lg:gap-48">
            <div className="md:pt-24">
              <h1
                className={`text-[3.2rem] leading-[1.1] pb-4 tracking-tight drop-shadow md:text-4xl md:tracking-normal md:leading-none lgtall:text-[4.2rem] xl:text-[4.2rem] name`}
              >
                Mario Vellandi
              </h1>
              <h2 className="text-[2rem] tracking-tight md:text-[2.4rem] font-light lg:text-xl text-balance">
                Web developer for Elixir, JavaScript, and CSS
              </h2>
            </div>
            <div className="flex w-full gap-32">
              <Link className="cta" href="/about">
                <span className="text">about me</span>
              </Link>
              <Link className="cta" href="/contact">
                <span className="text">contact</span>
              </Link>
            </div>
          </div>
          <HTMLComment text="HERO IMAGE" />
          <div className="w-full max-w-[120px] md:max-w-[200px] lgtall:max-w-[225px] xl:max-w-[180px] 2k:max-w-[225px]">
            <Image
              src={portrait}
              style={imageStyle}
              alt="photo: mario vellandi"
            />
          </div>
          <nav className="right-0 flex-col hidden gap-24 sm:absolute sm:flex">
            <ul>
              <li>
                <Link href="/about">GitHub</Link>
              </li>
              <li>
                <Link href="/about">LinkedIn</Link>
              </li>
              <li>
                <Link href="/about">Twitter</Link>
              </li>
            </ul>
          </nav>
        </Component>
      </div>
    </div>
  );
}
