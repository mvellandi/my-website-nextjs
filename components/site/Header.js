import cn from "classnames";
import Link from "next/link";
import Target from "/components/elements/Target";
import { elementContentWidthStyle as headerContentWidthStyle } from "/components/site/constants";
import Nav from "/components/site/Nav";
import { useState } from "react";
import HTMLComment from "react-html-comment";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export const headerHeight = {
  base: { default: 64, sm: 72 },
  main: { lg: 90, lgtall: 96, "2k3": 120 },
  secondary: { md: 110, "2k3": 120 },
};

export const headerHeightStyle = {
  base: `h-${headerHeight["base"]["default"]} sm:h-${headerHeight["base"]["sm"]}`,
  main: `lg:h-[${headerHeight["main"]["lg"]}px] lgtall:h-${headerHeight["main"]["lgtall"]} 2k3:h-[${headerHeight["main"]["2k3"]}px]`,
  secondary: `md:h-[${headerHeight["secondary"]["md"]}px] 2k3:h-[${headerHeight["secondary"]["2k3"]}px]`,
};

export default function Header({ type, page }) {
  let headerStyle = `site-padding-x flex justify-center items-center w-full bg-red ${headerHeightStyle["base"]} sm:items-end`;
  let headerContentStyle = `relative flex justify-between items-center w-full ${headerContentWidthStyle[type]} sm:items-end`;
  let navMenuStyle = "sr-only sm:not-sr-only sm:flex";
  let navLinkStyle =
    "target leading-none select-none text-[2rem] before:-mt-[1.2rem] md:text-[2.4rem] md:before:-mt-[1.3rem]";

  if (pageTypeCheck(type, ["main"])) {
    headerStyle = cn(headerStyle, `sm:pb-10 ${headerHeightStyle["main"]}`);
  }
  if (pageTypeCheck(type, ["project"])) {
    headerStyle = cn(headerStyle, `sm:pb-12 ${headerHeightStyle["secondary"]}`);
    navMenuStyle = cn(
      navMenuStyle,
      "sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[7.2rem] 2xl:gap-[8.8rem]"
    );
  }
  if (pageTypeCheck(type, ["article", "page"])) {
    headerStyle = cn(headerStyle, `sm:pb-12 ${headerHeightStyle["secondary"]}`);
    navMenuStyle = cn(navMenuStyle, "gap-24 sm:gap-[30px] md:gap-40 lg:gap-64");
  }

  const [navOpen, setNav] = useState(false);

  const toggleNav = (event) => {
    setNav((open) => !open);
  };

  return (
    <>
      <HTMLComment text="MOBILE: NAV DRAWER; SCREEN READER HEADER" />
      <Nav
        aria-label="Primary"
        className={`absolute w-[300px] h-screen z-20 inset-y-0 left-0 transform ${
          navOpen ? "" : "-translate-x-full"
        } transition duration-200 ease-in-out`}
        toggleNav={toggleNav}
      />
      {/*  */}
      <HTMLComment text="MOBILE: HEADER BACKGROUND" />
      <div
        className={`${
          navOpen
            ? "absolute z-10 w-screen h-screen bg-red opacity-60"
            : "hidden"
        }`}
        onClick={toggleNav}
      ></div>
      {/*  */}
      <HTMLComment text="FULL RESPONSIVE SITE HEADER / NON-SCREEN READER" />
      <div className={headerStyle} aria-hidden>
        {/* HEADER CONTENT ROW */}
        <div className={headerContentStyle}>
          {/*  */}
          <HTMLComment text="LOGO" />
          <Target className="pt-6">
            <Link
              href="/"
              className="target text-[3.6rem] leading-[1] before:-mt-[0.6rem] font-brand text-white drop-shadow select-none md:text-[4.8rem]"
            >
              Vellandi
            </Link>
          </Target>
          {/*  */}
          <HTMLComment text="NAVIGATION" />
          <nav className="text-white">
            {/*  */}
            <HTMLComment text="MOBILE: BUTTON TO OPEN NAV DRAWER" />
            <Target>
              <button
                className={`target btn btn-sm btn-primary-bright sm:hidden ${
                  navOpen ? "hidden" : ""
                }`}
                onClick={toggleNav}
              >
                menu
              </button>
            </Target>
            {/*  */}
            <HTMLComment text="TABLET / DESKTOP: NAVIGATION" />
            <menu className={navMenuStyle}>
              {pageTypeCheck(type, ["main"]) && (
                <Target>
                  <Link
                    href="/contact"
                    className="target btn btn-md-round btn-primary-bright sm:-mr-16 lg:mr-0 lg:btn-lg-round"
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
                      className={cn(
                        navLinkStyle,
                        "before:-ml-4 md:before:ml-0"
                      )}
                    >
                      Play
                    </Link>
                  </Target>
                  {page !== "services" && (
                    <Target>
                      <Link href="/services" className={navLinkStyle}>
                        Services
                      </Link>
                    </Target>
                  )}
                  {page !== "contact" && (
                    <Target>
                      <Link href="/contact" className={navLinkStyle}>
                        Contact
                      </Link>
                    </Target>
                  )}
                </>
              )}
            </menu>
          </nav>
        </div>
      </div>
    </>
  );
}
