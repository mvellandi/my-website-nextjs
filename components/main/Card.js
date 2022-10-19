import Image from "next/future/image";
import imageSample from "/public/mario-portrait-fall-200.jpg";

const Card = ({ data: { image, imageAlt, heading, subheading }, as }) => {
  const Component = as || "div";
  return (
    <Component className="card bord-blue">
      {/* Reordered to semantically prioritize headings, though image will visually appear first */}
      <div className="flex flex-col gap-[5px] order-2 grow">
        <h2 className="text-gray-900 font-bold tracking-[-0.2px] leading-[1.22] lg:text-lg lg:leading-[1.2]">
          <a href="https://reactjs.org" className="card-primary-action">
            {heading}
          </a>
        </h2>
        {subheading ? (
          <h3 className="text-sm leading-[1.375] lg:text-base lg:leading-[1.3]">
            {subheading}
          </h3>
        ) : null}
      </div>
      <Image
        src={imageSample}
        alt={imageAlt}
        className="w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] order-1"
      />
    </Component>
  );
};

export default Card;
