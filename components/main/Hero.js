import Image from "next/image";
import Link from "next/link";
import portrait from "/public/mario-portrait-fall-225.jpg";
import HTMLComment from "react-html-comment";
import Social from "../site/Social";

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
    <div className="flex justify-center border-b-[16px] bg-red border-red-shade site-padding-x">
      {/* SECTION BACKGROUND + CONTENT ROW: full-width, h-centered children */}
      <Component className="relative flex justify-center w-full max-w-screen-xl pt-48 pb-24 text-white gap-28 hero sm:gap-48 md:pb-32 md:pt-28 lg:pt-28 lgtall:pt-28 lgtall:pb-40 xl:gap-52 2k:pb-48 2k:pt-72">
        <HTMLComment text="HERO TEXT" />
        <div className="flex flex-col items-end justify-center w-full max-w-[500px] text-right md:pt-28 sm:pl-24">
          <h1
            className={`-mr-4 text-[3.6rem] leading-[1.2] pb-4 tracking-tight drop-shadow md:text-[4.2rem] md:tracking-normal md:leading-none lgtall:text-[4.2rem] xl:text-[4.2rem] font-slab`}
          >
            Mario Vellandi
          </h1>
          <h2 className="text-[2.1rem] leading-none sm:leading-[1.3] tracking-tight md:text-[2.2rem] md:leading-[1.3] font-light text-balance">
            Web developer{" "}
            <span className="hidden sm:inline">
              for Elixir, JavaScript, and CSS
            </span>
          </h2>
          <nav>
            <ul className="-mr-14 flex gap-16 pt-24 text-[2.1rem] leading-[1] md:pt-32 lg:text-[2.2rem]">
              <li>
                <Link href="/about">
                  → <span className="cta">about me</span>
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link href="/contact">
                  → <span className="cta">contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <HTMLComment text="HERO IMAGE" />
        <div className="w-full max-w-[170px] md:max-w-[220px] md:pr-24 lgtall:max-w-[225px] 2k:max-w-[225px]">
          <Image
            src={portrait}
            style={imageStyle}
            alt="photo: mario vellandi"
          />
        </div>
        <Social type="hero" />
      </Component>
    </div>
  );
}
