import Link from 'next/link'
import Target from '/components/elements/Target'
import { MdClose } from 'react-icons/md'

export default function Nav({ className, toggleNav }) {
    return (
        <div className={className}>
            <nav className="min-h-screen w-[80vw] max-w-[300px] border-r-6 border-red-shade bg-red pl-20 pr-12 pt-24 text-white">
                <div className="mb-48 flex w-full items-center justify-between">
                    <Target>
                        <Link
                            href="/"
                            className="target select-none font-brand text-[4.8rem] leading-[1] text-white drop-shadow before:-mt-[0.6rem]"
                        >
                            Vellandi
                        </Link>
                    </Target>
                    <Target>
                        <button
                            className="target block"
                            onClick={toggleNav}
                            aria-hidden
                        >
                            <span className="sr-only">Close Menu</span>
                            <MdClose className="h-44 w-44" />
                        </button>
                    </Target>
                </div>
                <div className="flex flex-col gap-32 text-[3.6rem] font-semibold tracking-1">
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
                            About Me
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
    )
}
