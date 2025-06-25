import cn from 'classnames'
import Link from 'next/link'
import Target from '/components/elements/Target'
import {
    elementContentWidthStyle as headerContentWidthStyle,
    pageTypeCheck,
    getNavMenuStyle,
    navLinkStyle,
} from '/components/site/constants'
import Nav from '/components/site/Nav'
import { useState } from 'react'
import HTMLComment from 'react-html-comment'

export default function Header({ type, page }) {
    let headerContentStyle = `relative flex justify-between items-center w-full ${headerContentWidthStyle[type]} sm:items-end`
    let logoStyle = 'pt-6'

    const navMenuStyle = getNavMenuStyle(type)

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
            <div id="pagetop" className="h-0 scroll-mt-[12rem]">
                {' '}
            </div>
            {!pageTypeCheck(type, ['main']) ? (
                <>
                    <SideNavBackground
                        navOpen={navOpen}
                        toggleNav={toggleNav}
                    />
                    <FullHeader props={props} />
                    <div id="pagetop" className="h-0 scroll-mt-[12rem]">
                        {' '}
                    </div>
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
                            className="select-none font-brand text-[3.6rem] leading-[1] text-white drop-shadow before:-mt-[0.6rem] md:text-[4.8rem]"
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
                                className={`btn btn-sm btn-primary-bright sm:hidden ${
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
                                                className={navLinkStyle}
                                            >
                                                Projects
                                            </Link>
                                        </Target>
                                    )}
                                    {props.type !== 'article' && (
                                        <Target>
                                            <Link
                                                href="/articles"
                                                className={navLinkStyle}
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
                                                navLinkStyle,
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
                                                className={navLinkStyle}
                                            >
                                                About Me
                                            </Link>
                                        </Target>
                                    )}
                                    {props.page !== 'contact' && (
                                        <Target>
                                            <Link
                                                href="/contact"
                                                className={navLinkStyle}
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
