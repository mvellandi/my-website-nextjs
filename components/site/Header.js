import cn from "classnames";
import Link from "next/link";

export default function Header({ as, layout }) {
  const Component = as || "div";
  let headAttributes = "flex justify-between items-center w-full";
  switch (layout) {
    case "main":
      headAttributes = cn(headAttributes, "max-w-screen-xl");
      break;
    case "item":
      headAttributes = cn(headAttributes, "max-w-[870px] xl:max-w-screen-xl");
    default:
      break;
  }
  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <Component className="flex justify-center w-full bg-red site-padding-x py-2 sm:pt-6 fixed z-10 h-[56px] sm:h-[72px] lg:h-[80px]">
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headAttributes}>
        {/* LOGO */}
        <span className="inline text-3xl lg:text-4xl font-brand text-white drop-shadow">
          <Link href="/">Vellandi</Link>
        </span>
        {/* NAV GROUP */}
        <nav className="text-white">
          {/* MOBILE NAV BTN */}
          <button className="btn btn-sm btn-primary btn-primary-bright sm:hidden">
            menu
          </button>
          {/* NAV LINKS  */}
          <ul className="hidden space-x-8 sm:flex md:space-x-12 lg:pt-4">
            {/* <li>Projects</li> */}
            {/* <li>Writing</li> */}
            {/* <li>Play</li> */}
            {/* <li>About</li> */}
            <li className="btn btn-md lg:btn-lg btn-link">
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Component>
  );
}
// h-[48px] sm:h-[68px] lg:h-[80px]
