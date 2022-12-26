import cn from "classnames";
import Link from "next/link";
import Btn from '/components/elements/Btn';

export default function Header({ as, layout, type }) {
  const Component = as || "div";
  let rootStyle = "site-padding-x flex justify-center items-center w-full bg-red fixed z-10 h-56 sm:h-[72px] sm:items-end sm:pb-12";
  let headStyle = "flex justify-between items-center w-full sm:items-end";
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
  let linkListStyle = "hidden space-x-6 sm:flex md:gap-24 lg:pt-0"
  let linkItemStyle = "btn btn-md md:btn-lg btn-link bord-blue"
  
  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <Component className={rootStyle}>
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headStyle}>
        {/* LOGO */}
        <span className="text-3xl font-brand text-white drop-shadow md:h-min md:text-4xl">
          <Link href="/">Vellandi</Link>
        </span>
        {/* NAV GROUP */}
        <nav className="text-white">
          {/* MOBILE NAV BTN */}
          <div className="relative">
            <button className="site-nav-menu">
              menu
            </button>
          </div>
          {/* NAV LINKS  */}
          {type === "main" && (
            <ul className={linkListStyle}>
              <li className={linkItemStyle} style={{paddingBottom: 0, paddingRight: 0}}>
              <a href="/contact">
                Contact
              </a>
            </li>
            </ul>)}
          {type !== "main" && (
          <ul className={linkListStyle}>
            {(type !== "project") && 
              (<li className={linkItemStyle} style={{paddingBottom: 0}}>
                <Link href="/">
                  Projects
                </Link>
              </li>)}
            {(type !== "article") && 
              (<li className={linkItemStyle} style={{paddingBottom: 0}}>
                <Link href="/articles">
                  Writing
                </Link>
              </li>)}
            <li className={linkItemStyle} style={{paddingBottom: 0}}>
              <Link href="/play">
                Play
              </Link>
            </li>
            <li className={linkItemStyle} style={{paddingBottom: 0}}>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className={linkItemStyle} style={{paddingBottom: 0}}>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>)}
        </nav>
      </div>
    </Component>
  );
}