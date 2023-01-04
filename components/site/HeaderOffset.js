import { headerHeight } from "/components/site/Header";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export default function HeaderOffset({ type }) {
  let extra;
  if (pageTypeCheck(type, ["main"])) {
    extra = "main";
  } else if (pageTypeCheck(type, ["project", "article", "page"])) {
    extra = "secondary";
  }

  return <div className={`${headerHeight.base} ${headerHeight[extra]}`}></div>;
}
