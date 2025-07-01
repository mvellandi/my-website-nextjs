import Link from 'next/link'

interface SocialProps {
    type: 'hero' | 'footer'
    pageType?: string
}

interface SocialStyle {
    nav: string
    list: string
    item: string
}

interface SocialStyles {
    hero: SocialStyle
    footer: SocialStyle
}

export default function Social({ type, pageType }: SocialProps) {
    const style: SocialStyles = {
        hero: {
            nav: 'right-0 hidden lg:absolute lg:block',
            list: 'flex flex-col pt-8 gap-24 text-[1.15rem] -mr-16 font-semibold tracking-wide leading-none text-right 3xl:text-[1.4rem] 2k3:text-[1.25rem] 2k3:pt-16',
            item: 'cta text-right',
        },
        footer: {
            nav: `flex justify-center w-full py-16 text-white text-lg bg-gray-700 leading-[0.9] ${pageType === 'main' && 'lg:hidden'}`,
            list: 'flex flex-row gap-40 md:gap-56',
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
