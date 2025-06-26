import { navHeightStyle, pageTypeCheck } from "../site/constants";
import HTMLComment from "react-html-comment";

interface FixedHeaderOffsetProps {
  type: string;
}

export default function FixedHeaderOffset({ type }: FixedHeaderOffsetProps) {
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