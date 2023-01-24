import { headerHeightStyle as siteHeader } from "/components/site/Header";
import { navHeightStyle as sectionNav } from "/components/section/Nav";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export default function FixedHeaderOffset({ type }) {
  let shExtra = pageTypeCheck(type, ["main"]) ? "main" : "secondary";

  return (
    <>
      <div className={`${siteHeader.base} ${siteHeader[shExtra]}`}></div>
      {pageTypeCheck(type, ["project", "article"]) && (
        <div className={`${sectionNav.base}`}></div>
      )}
    </>
  );
}
