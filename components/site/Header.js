import cn from "classnames";
import Link from "next/link";
import Target from '/components/elements/Target';

export default function Header({ as, layout, type }) {
  const Component = as || "div";
  let rootStyle = "site-padding-x flex justify-center items-center w-full bg-red fixed z-10 h-56 sm:h-[72px] sm:items-end sm:pb-12";
  let headStyle = "relative flex justify-between items-center w-full sm:items-end";
  switch (type) {
    case "main":
      rootStyle = cn(rootStyle, "lgtall:h-96 2k:h-[90px] 2k3:h-[120px]");
      headStyle = cn(headStyle, "max-w-screen-xl");
      break;
    case "project" || "article":
      rootStyle = cn(rootStyle, "md:h-[110px] 2k3:h-[120px]");
      headStyle = cn(headStyle, "max-w-[870px] xl:max-w-screen-xl");
    default:
      break;
  }
  let listStyle = "hidden space-x-6 sm:flex md:gap-24 lg:pt-0"
  let listItemStyle = "relative"
  let navItemStyle = "target before:-mt-14 font-medium select-none text-[2rem] leading-[1] md:text-[2.4rem]"
  
  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <Component className={rootStyle}>
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headStyle}>
        {/* LOGO */}
          <Target>
            <Link href="/" className="target before:-mt-6 text-[3.6rem] leading-[1] font-brand text-white drop-shadow select-none md:text-4xl">
              Vellandi
            </Link>
          </Target>
        {/* NAV GROUP */}
        <nav className="text-white relative">
          {/* MOBILE NAV BTN */}
            <button className="target btn btn-sm btn-primary btn-primary-bright sm:hidden">
              menu
            </button>
          {/* NAV LINKS  */}
          {type === "main" && (
            <ul className={listStyle}>
              <li className={listItemStyle}>
              <Link href="/contact" className={navItemStyle}>
                Contact
              </Link>
            </li>
            </ul>)}
          {type !== "main" && (
          <ul className={listStyle}>
            {(type !== "project") && 
              (<li className={listItemStyle}>
                <Link href="/" className={navItemStyle}>
                  Projects
                </Link>
              </li>)}
            {(type !== "article") && 
              (<li className={listItemStyle}>
                <Link href="/articles" className={navItemStyle}>
                  Writing
                </Link>
              </li>)}
            <li className={listItemStyle}>
              <Link href="/play" className={navItemStyle}>
                Play
              </Link>
            </li>
            <li className={listItemStyle}>
              <Link href="/about" className={navItemStyle}>
                About
              </Link>
            </li>
            <li className={listItemStyle}>
              <Link href="/contact" className={navItemStyle}>
                Contact
              </Link>
            </li>
          </ul>)}
        </nav>
      </div>
    </Component>
  );
}