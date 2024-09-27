import cn from 'classnames'
import Link from 'next/link'
import Target from '/components/elements/Target'
import { elementContentWidthStyle as headerContentWidthStyle } from '/components/site/constants'
import Nav from '/components/site/Nav'
import { useState } from 'react'
import HTMLComment from 'react-html-comment'

const pageTypeCheck = (type, list) => {
    return list.includes(type)
}

export default function Header({ type, page }) {
    let headerContentStyle = `relative flex justify-between items-center w-full ${headerContentWidthStyle[type]} sm:items-end`
    let navMenuStyle = 'sr-only sm:not-sr-only sm:flex'
    let navLinkStyle =
        'target leading-none select-none text-[2rem] before:-mt-[1.2rem] md:text-[2.4rem] md:before:-mt-[1.3rem]'
    let logoStyle = 'pt-6'

    if (pageTypeCheck(type, ['project'])) {
        navMenuStyle = cn(
            navMenuStyle,
            'sm:gap-36 md:gap-52 lg:gap-64 xl:gap-[7.2rem] 2xl:gap-[8.8rem]'
        )
    }
    if (pageTypeCheck(type, ['article', 'page'])) {
        navMenuStyle = cn(
            navMenuStyle,
            'gap-24 sm:gap-[30px] md:gap-40 lg:gap-64'
        )
    }

    const [navOpen, setNav] = useState(false)

    const toggleNav = (event) => {
        setNav((open) => !open)
    }

    const props = {
        navOpen,
        toggleNav,
        type,
        page,
        logoStyle,
        headerContentStyle,
        navMenuStyle,
        navLinkStyle,
    }

    return (
        <>
            <HTMLComment text="SITE NAVIGATION FOR SCREEN READERS AND MOBILE SIDELOADED MENU ON SELECT PAGE TYPES" />
            <Nav
                aria-label="Primary"
                className={`absolute inset-y-0 left-0 z-20 h-screen w-[300px] transform ${
                    navOpen ? '' : '-translate-x-full'
                } transition duration-200 ease-in-out`}
                toggleNav={toggleNav}
            />
            {!pageTypeCheck(type, ['main']) ? (
                <>
                    <SideNavBackground
                        navOpen={navOpen}
                        toggleNav={toggleNav}
                    />
                    <FullHeader props={props} />
                </>
            ) : null}
        </>
    )
}

function SideNavBackground({ navOpen, toggleNav }) {
    return (
        <>
            <HTMLComment text="MOBILE: HEADER BACKGROUND" />
            <div
                className={`${
                    navOpen
                        ? 'absolute z-10 h-screen w-screen bg-red opacity-60'
                        : 'hidden'
                }`}
                onClick={toggleNav}
            ></div>
        </>
    )
}

function FullHeader({ props }) {
    const headerStyle = `${props.headerStyle} full_header`
    return (
        <>
            <HTMLComment text="FULL HEADER / NON-SCREEN READERS" />
            <div className="full_header" aria-hidden>
                {/* HEADER CONTENT ROW */}
                <div className={props.headerContentStyle}>
                    {/*  */}
                    <HTMLComment text="LOGO" />
                    <Target className={props.logoStyle}>
                        <Link
                            href="/"
                            className="target select-none font-brand text-[3.6rem] leading-[1] text-white drop-shadow before:-mt-[0.6rem] md:text-[4.8rem]"
                        >
                            Vellandi
                        </Link>
                    </Target>
                    {/*  */}
                    <HTMLComment text="NAVIGATION" />
                    <nav className="text-white">
                        {/*  */}
                        <HTMLComment text="MOBILE: BUTTON TO OPEN NAV DRAWER" />
                        <Target>
                            <button
                                className={`target btn btn-sm btn-primary-bright sm:hidden ${
                                    props.navOpen ? 'hidden' : ''
                                }`}
                                onClick={props.toggleNav}
                            >
                                menu
                            </button>
                        </Target>
                        {/*  */}
                        <HTMLComment text="TABLET / DESKTOP: NAVIGATION" />
                        <menu className={props.navMenuStyle}>
                            {pageTypeCheck(props.type, [
                                'project',
                                'article',
                                'page',
                            ]) && (
                                <>
                                    {props.type !== 'project' && (
                                        <Target>
                                            <Link
                                                href="/"
                                                className={props.navLinkStyle}
                                            >
                                                Projects
                                            </Link>
                                        </Target>
                                    )}
                                    {props.type !== 'article' && (
                                        <Target>
                                            <Link
                                                href="/articles"
                                                className={props.navLinkStyle}
                                            >
                                                Media
                                            </Link>
                                        </Target>
                                    )}
                                    {/* reposition click target's x-position, as 'play' is a short word  */}
                                    <Target>
                                        <Link
                                            href="/demo"
                                            className={cn(
                                                props.navLinkStyle,
                                                'before:-ml-4 md:before:ml-0'
                                            )}
                                        >
                                            Demo
                                        </Link>
                                    </Target>
                                    {props.page !== 'about' && (
                                        <Target>
                                            <Link
                                                href="/about"
                                                className={props.navLinkStyle}
                                            >
                                                About Me
                                            </Link>
                                        </Target>
                                    )}
                                    {props.page !== 'contact' && (
                                        <Target>
                                            <Link
                                                href="/contact"
                                                className={props.navLinkStyle}
                                            >
                                                Contact
                                            </Link>
                                        </Target>
                                    )}
                                </>
                            )}
                        </menu>
                    </nav>
                </div>
            </div>
        </>
    )
}
