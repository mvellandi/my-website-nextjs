import cn from "classnames";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

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
  let navAttributes = "flex justify-between items-center w-full max-w-[870px] py-3";
  switch (place) {
    case "top":
      navAttributes = cn(navAttributes, "lg:pt-11");
      break;
    case "bottom":
      navAttributes = cn(navAttributes, "lg:pb-11");
    default:
      break;
  }
  if (type === "project")
    navAttributes = cn(navAttributes, "xl:max-w-screen-xl ");
  // Set homepage as index for projects
  const sectionHomeRoute = path === "/projects" ? "/" : path;
  return (
    // NAV BACKGROUND
    <Component className="flex justify-center w-full site-padding-x border-b border-gray-400 bg-gray-25 lg:border-b-2">
      <div
        className={`w-full max-w-[870px] ${
          type === "project" && "xl:max-w-screen-xl"
        }`}
      >
        <div
          className={`${navAttributes} ${
            type === "project" && "xl:max-w-screen-xl"
          }`}
        >
          <Link href={sectionHomeRoute}>
            <a className="-ml-2 text-[22px] text-[#293a6b] lg:text-2xl">
              <RiArrowLeftSLine className="inline mb-1 -mr-[2px]" />
              {title}
            </a>
          </Link>
          <div className="flex gap-4 font-semibold text-base mr-4 sm:mr-0 lg:text-lg">
            {prev && (
              <Link href={`${path}/${prev}`}>
                <a className="text-link">
                  previous
                  <span className="hidden md:inline">&nbsp;{type}</span>
                </a>
              </Link>
            )}
            {prev && next && <span className="font-normal">|</span>}
            {next && (
              <Link href={`${path}/${next}`}>
                <a className="text-link">
                  next<span className="hidden md:inline">&nbsp;{type}</span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Component>
  );
}
