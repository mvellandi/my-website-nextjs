import { navHeightStyle, pageTypeCheck } from "/components/site/constants";
import HTMLComment from "react-html-comment";

export default function FixedHeaderOffset({ type }) {
  return (
    <>
      <HTMLComment text="OFFSET HEIGHT FOR FIXED HEADER AND NAVIGATION" />
      <div>
        <HTMLComment text="FULL SITE HEADER" />
        <div className="full_header_offset"></div>
        <HTMLComment text="PROJECT/SECTION NAV" />
        {pageTypeCheck(type, ["project", "article"]) && (
          <div className={`${navHeightStyle.base}`}></div>
        )}
      </div>
    </>
  );
}
