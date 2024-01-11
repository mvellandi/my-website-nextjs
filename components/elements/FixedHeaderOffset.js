import { navHeightStyle as sectionNav } from "/components/section/Nav";
import HTMLComment from "react-html-comment";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export default function FixedHeaderOffset({ type }) {
  return (
    <>
      <HTMLComment text="OFFSET HEIGHT FOR FIXED HEADER AND NAVIGATION" />
      <div>
        <HTMLComment text="FULL SITE HEADER" />
        <div className="full_header_offset"></div>
        <HTMLComment text="PROJECT/SECTION NAV" />
        {pageTypeCheck(type, ["project", "article"]) && (
          <div className={`${sectionNav.base}`}></div>
        )}
      </div>
    </>
  );
}
