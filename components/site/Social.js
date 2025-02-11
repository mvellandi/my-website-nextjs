import Link from 'next/link'

export default function Social({ type, pageType }) {
    let style = {
        hero: {
            nav: 'right-0 hidden lg:absolute lg:block',
            list: 'flex flex-col gap-24 text-[2.1rem] font-semibold tracking-wide leading-none',
            item: 'cta',
        },
        footer: {
            nav: `flex justify-center w-full py-24 text-white text-lg bg-gray-700 ${pageType === 'main' && 'lg:hidden'}`,
            list: 'flex flex-row gap-36',
            item: 'cta',
        },
    }

    return (
        <nav className={style[type].nav}>
            <ul className={style[type].list}>
                <li>
                    <Link
                        className={style[type].item}
                        href="https://github.com/mvellandi"
                        target="_blank"
                    >
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link
                        className={style[type].item}
                        href="https://www.linkedin.com/in/mvellandi/"
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link
                        className={style[type].item}
                        href="https://twitter.com/triforcekid7"
                        target="_blank"
                    >
                        Twitter
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
