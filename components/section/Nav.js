import cn from "classnames";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import { elementContentWidthStyle as navContentWidthStyle } from "/components/site/constants";

export const navHeightStyle = {
  base: "h-[58px] md:h-[75px] lg:h-96",
};

export default function SectionNav({
  place,
  as,
  title,
  type,
  prev,
  next,
  path,
}) {
  const Component = as || "div";

  let navShadowStyle = `shadow-[0_1px_4px_0_rgba(50,50,50,0.45),0_15px_8px_0_rgba(230,230,230,0.3)]`;

  let navStyle = `flex justify-center w-full site-padding-x border-gray-400 bg-gray-25 ${navHeightStyle.base} ${navShadowStyle}`;
  let navContentStyle = `flex justify-between items-center w-full py-12 ${navContentWidthStyle[type]}`;
  switch (place) {
    case "top":
      navStyle = cn(navStyle, "border-b lg:border-b-2");
      navContentStyle = cn(navContentStyle, "md:pt-28 lg:pt-44");
      break;
    case "bottom":
      navStyle = cn(navStyle, "border-t lg:border-t-2");
      navContentStyle = cn(navContentStyle, "md:pb-28 md:pt-24 lg:pb-44");
  }

  // Set homepage as index for projects
  const sectionHomeRoute = path === "/projects" ? "/" : path;

  return (
    // NAV BACKGROUND
    <Component className={navStyle}>
      <div className={navContentStyle}>
        <Link
          href={sectionHomeRoute}
          className="-ml-16 font-medium text-[22px] text-gray-700 lg:-ml-28 lg:text-2xl"
        >
          <RiArrowLeftSLine className="inline mb-4 -mr-[2px]" aria-hidden />
          {title}
        </Link>
        <div className="flex gap-16 font-semibold text-base mr-16 sm:mr-0 lg:text-lg">
          {prev && (
            <Link href={`${path}/${prev}`} className="text-link">
              previous
              <span className="hidden md:inline">&nbsp;{type}</span>
            </Link>
          )}
          {prev && next && <span className="font-normal">|</span>}
          {next && (
            <Link href={`${path}/${next}`} className="text-link">
              next<span className="hidden md:inline">&nbsp;{type}</span>
            </Link>
          )}
        </div>
      </div>
    </Component>
  );
}
