import cn from "classnames";
import Link from "next/link";

export default function SectionNav({
  place,
  as,
  sectionTitle,
  prev,
  next,
  route,
}) {
  const Component = as || "div";
  let navAttributes = "flex justify-between w-full max-w-screen-lg px-5";
  switch (place) {
    case "top":
      navAttributes = cn(navAttributes, "py-4 lg:pt-11");
      break;
    case "bottom":
      navAttributes = cn(navAttributes, "py-4 lg:pb-11");
    default:
      break;
  }
  // console.log("navAttributes", navAttributes);
  return (
    // NAV BACKGROUND
    <Component className="flex justify-center w-full border-b border-gray-400 bg-gray-25 lg:border-b-2">
      <div className={navAttributes}>
        <Link href="">
          <a className="text-lg font-medium lg:text-xl">{sectionTitle}</a>
        </Link>
        <div className="flex gap-4 font-semibold text-base lg:text-lg">
          {prev && (
            <Link href={`${route}/${prev}`}>
              <a className="text-link">previous</a>
            </Link>
          )}
          {prev && next && <span className="font-normal">|</span>}
          {next && (
            <Link href={`${route}/${next}`}>
              <a className="text-link">next</a>
            </Link>
          )}
        </div>
      </div>
    </Component>
  );
}
