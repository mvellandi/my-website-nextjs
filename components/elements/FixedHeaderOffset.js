import { headerHeightStyle as siteHeader } from "/components/site/Header";
import { navHeightStyle as sectionNav } from "/components/section/Nav";
import HTMLComment from "react-html-comment";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export default function FixedHeaderOffset({ type }) {
  let shExtra = pageTypeCheck(type, ["main"]) ? "main" : "secondary";
  let siteHeaderHeight = `${siteHeader.base} ${siteHeader[shExtra]}`;
  return (
    <>
      <HTMLComment text="OFFSET HEIGHT FOR FIXED HEADER AND NAVIGATION" />
      <div>
        <HTMLComment text="SITE HEADER" />
        <div className={siteHeaderHeight}></div>
        <HTMLComment text="PROJECT/SECTION NAV" />
        {pageTypeCheck(type, ["project", "article"]) && (
          <div className={`${sectionNav.base}`}></div>
        )}
      </div>
    </>
  );
}
