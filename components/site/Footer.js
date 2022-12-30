import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-start w-full h-full py-16 border-t-5 border-t-red-shade bg-red">
      <div className="w-full max-w-screen-xl site-padding-x text-white">
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
