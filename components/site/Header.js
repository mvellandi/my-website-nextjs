import cn from "classnames";
import Link from "next/link";
import Target from "/components/elements/Target";
import { elementContentWidthStyle as headerContentWidthStyle } from "/components/site/constants";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export const headerHeightStyle = {
  base: "h-56 sm:h-[72px]",
  main: "lgtall:h-96 2k:h-[90px] 2k3:h-[120px]",
  secondary: "md:h-[110px] 2k3:h-[120px]",
};

export default function Header({ type }) {
  let headerStyle = `site-padding-x flex justify-center items-center w-full bg-red fixed z-10 sm:items-end ${headerHeightStyle.base}`;
  let headerContentStyle = `relative flex justify-between items-center w-full ${headerContentWidthStyle[type]} sm:items-end`;
  let navMenuStyle = "sr-only sm:not-sr-only sm:flex";
  let navLinkStyle = "target leading-none select-none";

  if (pageTypeCheck(type, ["main"])) {
    headerStyle = cn(headerStyle, `sm:pb-6 ${headerHeightStyle.main}`);
  }

  if (pageTypeCheck(type, ["project"])) {
    headerStyle = cn(headerStyle, `sm:pb-12 ${headerHeightStyle.secondary}`);
    navMenuStyle = cn(
      navMenuStyle,
      "sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[7.2rem] 2xl:gap-[8.8rem]"
    );
    navLinkStyle = cn(
      navLinkStyle,
      "text-[2rem] before:-mt-[1.2rem] md:text-[2.4rem] md:before:-mt-[1.3rem]"
    );
  }

  if (pageTypeCheck(type, ["article", "page"])) {
    headerStyle = cn(headerStyle, `sm:pb-12 ${headerHeightStyle.secondary}`);
    navLinkStyle = cn(
      navLinkStyle,
      "before:-mt-[1.1rem] md:text-[2.1rem] md:before:-mt-[1.2rem] lg:text-[2.4rem] lg:before:-mt-[1.3rem]"
    );
  }

  if (pageTypeCheck(type, ["article"])) {
    navMenuStyle = cn(navMenuStyle, "gap-24 sm:gap-[30px] md:gap-40 lg:gap-64");
    navLinkStyle = cn(navLinkStyle, "text-[1.9rem]");
  }

  if (pageTypeCheck(type, ["page"])) {
    navMenuStyle = cn(navMenuStyle, "gap-[26px] md:gap-40 lg:gap-[52px]");
    navLinkStyle = cn(navLinkStyle, "text-[1.8rem]");
  }

  return (
    // HEADER BACKGROUND ROW: full width, h-centered child
    // This is aria-hidden because its global navigation is incomplete and variable, depending on the page type and screen size.
    // Screen readers instead should use the comprehensive mobile navigation
    <div className={headerStyle} aria-hidden>
      {/* HEADER CONTENT ROW: full width until large screen, h-centered children (logo and nav), space-between  */}
      <div className={headerContentStyle}>
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
        <nav className="text-white">
          {/* MOBILE NAV BTN */}
          <Target>
            <button className="target btn btn-sm btn-primary-bright sm:hidden">
              menu
            </button>
          </Target>
          {/* NAV LINKS  */}
          <menu className={navMenuStyle}>
            {pageTypeCheck(type, ["main"]) && (
              <Target>
                <Link
                  href="/contact"
                  className="target btn btn-md-round btn-primary-bright lg:btn-lg-round lg:py-[8px]"
                >
                  Contact
                </Link>
              </Target>
            )}
            {pageTypeCheck(type, ["project", "article", "page"]) && (
              <>
                {type !== "project" && (
                  <Target>
                    <Link href="/" className={navLinkStyle}>
                      Projects
                    </Link>
                  </Target>
                )}
                {type !== "article" && (
                  <Target>
                    <Link href="/articles" className={navLinkStyle}>
                      Writing
                    </Link>
                  </Target>
                )}
                {/* reposition click target's x-position, as 'play' is a short word  */}
                <Target>
                  <Link
                    href="/play"
                    className={cn(navLinkStyle, "before:-ml-4 md:before:ml-0")}
                  >
                    Play
                  </Link>
                </Target>
                <Target>
                  <Link href="/about" className={navLinkStyle}>
                    About
                  </Link>
                </Target>
                <Target>
                  <Link href="/contact" className={navLinkStyle}>
                    Contact
                  </Link>
                </Target>
              </>
            )}
          </menu>
        </nav>
      </div>
    </div>
  );
}
