import cn from "classnames";
import Link from "next/link";
import Target from "/components/elements/Target";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export default function Header({ as, type }) {
  const Component = as || "div";

  let rootStyle =
    "site-padding-x flex justify-center items-center w-full bg-red fixed z-10 h-56 sm:h-[72px] sm:items-end";
  let headStyle =
    "relative flex justify-between items-center w-full sm:items-end";
  let navListStyle = "sr-only sm:not-sr-only sm:flex";
  let navListItemStyle = "relative";
  let navLinkStyle = "target leading-none select-none";

  if (pageTypeCheck(type, ["main"])) {
    rootStyle = cn(rootStyle, "sm:pb-6 lgtall:h-96 2k:h-[90px] 2k3:h-[120px]");
    headStyle = cn(headStyle, "max-w-screen-xl");
  }

  if (pageTypeCheck(type, ["project", "article", "page"])) {
    rootStyle = cn(rootStyle, "sm:pb-12 md:h-[110px] 2k3:h-[120px]");
    headStyle = cn(headStyle, "max-w-[870px] xl:max-w-screen-xl");
  }

  if (pageTypeCheck(type, ["project", "article"])) {
    navListStyle = cn(
      navListStyle,
      "sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[7.6rem]"
    );
    navLinkStyle = cn(
      navLinkStyle,
      "text-[2rem] before:-mt-[1.2rem] md:text-[2.4rem] md:before:-mt-[1.3rem]"
    );
  }

  if (pageTypeCheck(type, ["page"])) {
    navListStyle = cn(
      navListStyle,
      "gap-24 md:gap-40 lg:gap-64 xl:gap-[7.6rem]"
    );
    navLinkStyle = cn(
      navLinkStyle,
      "text-[1.9rem] before:-mt-[1.1rem] md:text-[2.1rem] md:before:-mt-[1.2rem] lg:text-[2.4rem] lg:before:-mt-[1.3rem]"
    );
  }

  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    <Component className={rootStyle}>
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headStyle}>
        {/* LOGO */}
        <Target>
          <Link
            href="/"
            className="target text-[3.6rem] leading-[1] before:-mt-[0.6rem] font-brand text-white drop-shadow select-none md:text-[4.8rem]"
          >
            Vellandi
          </Link>
        </Target>
        {/* NAV GROUP */}
        <nav className="text-white relative">
          {/* MOBILE NAV BTN */}
          <button
            className="target btn btn-sm btn-primary-bright sm:hidden"
            aria-hidden
          >
            menu
          </button>
          {/* NAV LINKS  */}
          <ul className={navListStyle}>
            {pageTypeCheck(type, ["main"]) && (
              <li className={navListItemStyle}>
                <Link
                  href="/contact"
                  className="target btn btn-md-round btn-primary-bright lg:btn-lg-round lg:py-[8px]"
                >
                  Contact
                </Link>
              </li>
            )}
            {pageTypeCheck(type, ["project", "article", "page"]) && (
              <>
                {type !== "project" && (
                  <li className={navListItemStyle}>
                    <Link href="/" className={navLinkStyle}>
                      Projects
                    </Link>
                  </li>
                )}
                {type !== "article" && (
                  <li className={navListItemStyle}>
                    <Link href="/articles" className={navLinkStyle}>
                      Writing
                    </Link>
                  </li>
                )}
                <li className={navListItemStyle}>
                  <Link
                    href="/play"
                    className={cn(navLinkStyle, "before:-ml-4 md:before:ml-0")}
                  >
                    Play
                  </Link>
                </li>
                <li className={navListItemStyle}>
                  <Link href="/about" className={navLinkStyle}>
                    About
                  </Link>
                </li>
                <li className={navListItemStyle}>
                  <Link href="/contact" className={navLinkStyle}>
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Component>
  );
}
