import Image from "next/future/image";
import portrait from "/public/mario-portrait-fall-200.jpg";

const imageStyle = {
  borderRadius: "9999px",
  border: "1px solid #980F0F",
  filter: "drop-Shadow(0 5px 12px rgba(62, 17, 17, 0.4)",
};

export default function Hero({ as }) {
  const Component = as || "div";
  return (
    // SECTION BACKGROUND + CONTENT ROW: full-width, h-centered children
    <Component className="position-adjust flex justify-center w-full gap-4 sm:gap-12 site-padding-x pt-4 md:pt-0 pb-6 bg-red text-white border-b-8 border-red-shade">
      {/* TEXT COLUMN */}
      <div className="flex flex-col justify-center gap-6 md:w-[380px] lg:gap-12">
        <h1 className="text-sm sm:text-md md:text-lg lg:text-xl text-white order-2">
          {"\u2192"}{" "}
          <span className="about-mario">
            <a href="/about">about Mario Vellandi</a>
          </span>
        </h1>
        <h2 className="text-xl pmd:text-2xl -tracking-3 md:text-3xl md:leading-[1.22] font-light drop-shadow order-1">
          I research and produce digital media
        </h2>
      </div>
      {/* PHOTO */}
      <div className="min-w-[112px] pmd:min-w-[140px] md:w-[200px] xl:w-[180px]">
        {/* <div sty> */}
        <Image src={portrait} style={imageStyle} alt="photo: mario vellandi" />
      </div>
    </Component>
  );
}
