import Link from 'next/link'
import Target from '../elements/Target'
import { MdClose } from 'react-icons/md'
import type { MouseEvent } from 'react'

interface NavProps {
    className?: string
    toggleNav: (event: MouseEvent) => void
    'aria-label'?: string
}

export default function Nav({ className, toggleNav, ...ariaProps }: NavProps) {
    return (
        <div className={className} {...ariaProps}>
            <nav className="min-h-screen w-[80vw] max-w-[300px] border-r-6 border-red-shade bg-red pl-20 pr-12 pt-24 text-white">
                <div className="mb-48 flex w-full items-center justify-between">
                    <Target>
                        <Link
                            href="/"
                            className="select-none font-brand text-[3rem] leading-[1] text-white drop-shadow before:-mt-[0.6rem]"
                        >
                            Vellandi
                        </Link>
                    </Target>
                    <Target>
                        <button
                            className="block"
                            onClick={toggleNav}
                            aria-hidden
                        >
                            <span className="sr-only">Close Menu</span>
                            <MdClose className="h-44 w-44" />
                        </button>
                    </Target>
                </div>
                <div className="flex flex-col gap-32 text-[2.25rem] font-semibold tracking-1">
                    <Target>
                        <Link href="/">Projects</Link>
                    </Target>
                    <Target>
                        <Link href="/articles">Media</Link>
                    </Target>
                    <Target>
                        <Link href="/demo">Demo</Link>
                    </Target>
                    <Target>
                        <Link href="/about">About Me</Link>
                    </Target>
                    <Target>
                        <Link href="/contact">Contact</Link>
                    </Target>
                </div>
            </nav>
        </div>
    )
}
