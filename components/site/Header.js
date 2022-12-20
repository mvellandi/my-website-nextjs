import cn from "classnames";
import Link from "next/link";

export default function Header({ as, layout, type }) {
  const Component = as || "div";
  let rootStyle = "flex justify-center w-full bg-red site-padding-x pt-4 pb-2.5 sm:pt-6 fixed z-10 h-[56px] sm:h-[72px]";
  let headStyle = "flex justify-between items-end w-full h-full";
  switch (type) {
    case "main":
      rootStyle = cn(rootStyle, "xl:pt-0 2k:h-[90px] 2k3:h-[120px]");
      headStyle = cn(headStyle, "max-w-screen-xl");
      break;
      case "project" || "article":
      rootStyle = cn(rootStyle, "md:h-[110px] 2k3:h-[120px]");
      headStyle = cn(headStyle, "max-w-[870px] xl:max-w-screen-xl");
    default:
      break;
  }
  let linkListStyle = "hidden space-x-6 sm:flex md:space-x-12 lg:pt-0"
  let linkItemStyle = "btn btn-md lg:btn-lg btn-link"
  
  console.log("type:", type)
  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <Component className={rootStyle}>
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headStyle}>
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
                <a href="/">
                  Projects
                </a>
              </li>)}
            {(type !== "article") && 
              (<li className={linkItemStyle} style={{paddingBottom: 0}}>
                <a href="/articles">
                  Writing
                </a>
              </li>)}
            <li className={linkItemStyle} style={{paddingBottom: 0}}>
              <a href="/play">
                Play
              </a>
            </li>
            <li className={linkItemStyle} style={{paddingBottom: 0}}>
              <a href="/about">
                About
              </a>
            </li>
            <li className={linkItemStyle} style={{paddingBottom: 0, paddingRight: 0}}>
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>)}
        </nav>
      </div>
    </Component>
  );
}
// h-[48px] sm:h-[68px] lg:h-[80px]
