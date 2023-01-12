import Link from "next/link";
import Target from "/components/elements/Target";
import { MdClose } from "react-icons/md";

export default function Nav({ className, toggleNav }) {
  return (
    <div className={className}>
      <nav className="pl-20 pr-12 pt-24 w-[80vw] min-h-screen max-w-[300px] bg-red border-r-6 border-red-shade text-white">
        <div className="flex justify-between items-center w-full mb-48">
          <Target>
            <Link
              href="/"
              className="target text-[4.8rem] leading-[1] before:-mt-[0.6rem] font-brand text-white drop-shadow select-none"
            >
              Vellandi
            </Link>
          </Target>
          <Target>
            <button className="target block" onClick={toggleNav} aria-hidden>
              <span className="sr-only">Close Menu</span>
              <MdClose className="w-44 h-44" />
            </button>
          </Target>
        </div>
        <div className="flex flex-col gap-32 font-semibold text-[3.6rem] tracking-3">
          <Target>
            <Link href="/projects" className="target">
              Projects
            </Link>
          </Target>
          <Target>
            <Link href="/articles" className="target">
              Writing
            </Link>
          </Target>
          <Target>
            <Link href="/play" className="target">
              Play
            </Link>
          </Target>
          <Target>
            <Link href="/about" className="target">
              About
            </Link>
          </Target>
          <Target>
            <Link href="/contact" className="target">
              Contact
            </Link>
          </Target>
        </div>
      </nav>
    </div>
  );
}
