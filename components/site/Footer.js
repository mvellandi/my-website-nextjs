import cn from "classnames";
import Link from "next/link";

const pageTypeCheck = (type, list) => {
  return list.includes(type);
};

export default function Footer({ type }) {
  let footerContentStyle = "w-full site-padding-x text-white";

  if (pageTypeCheck(type, ["main"])) {
    footerContentStyle = cn(footerContentStyle, "max-w-screen-xl");
  }

  if (pageTypeCheck(type, ["project"])) {
    footerContentStyle = cn(
      footerContentStyle,
      "max-w-[870px] xl:max-w-screen-xl"
    );
  }

  if (pageTypeCheck(type, ["article", "page"])) {
    footerContentStyle = cn(footerContentStyle, "max-w-[870px]");
  }

  return (
    <footer className="flex justify-center items-start w-full h-full py-16 border-t-5 border-t-red-shade bg-red">
      <div className={footerContentStyle}>
        <span className="text-sm xl:text-base">
          &copy; {new Date().getFullYear()} - Mario Vellandi
        </span>
        <div className="space-y-12 hidden">
          <div>
            <button className="btn btn-xs btn-primary-bright">menu xs</button>
          </div>
          <div>
            <button className="btn btn-xs-round btn-primary-bright">
              menu xs
            </button>
          </div>
          <div>
            <button className="btn btn-sm btn-primary-bright">menu sm</button>
          </div>
          <div>
            <button className="btn btn-sm-round btn-primary-bright">
              menu sm
            </button>
          </div>
          <div>
            <button className="btn btn-md btn-primary-bright">menu md</button>
          </div>
          <div>
            <button className="btn btn-md-round btn-primary-bright">
              menu md
            </button>
          </div>
          <div>
            <button className="btn btn-lg btn-primary-bright">menu lg</button>
          </div>
          <div>
            <button className="btn btn-lg-round btn-primary-bright">
              menu lg
            </button>
          </div>
          <div>
            <button className="btn btn-xl btn-primary-bright">menu xl</button>
          </div>
          <div>
            <button className="btn btn-xl-round btn-primary-bright">
              menu xl
            </button>
          </div>
          <div>
            <button className="btn btn-2xl btn-primary-bright">menu 2xl</button>
          </div>
          <div>
            <button className="btn btn-2xl-round btn-primary-bright">
              menu 2xl
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
