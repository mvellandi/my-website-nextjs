import cn from 'classnames'
import Link from 'next/link'
import Target from '../elements/Target'
import {
    elementContentWidthStyle as headerContentWidthStyle,
    pageTypeCheck,
    getNavMenuStyle,
    navLinkStyle,
} from './constants'
import Nav from './Nav'
import { useState } from 'react'
import HTMLComment from 'react-html-comment'
import type { MouseEvent } from 'react'

interface HeaderProps {
    type: string
    page?: string
}

interface SideNavBackgroundProps {
    navOpen: boolean
    toggleNav: (event: MouseEvent) => void
}

interface HeaderComponentProps {
    navOpen: boolean
    toggleNav: (event: MouseEvent) => void
    type: string
    page?: string
    logoStyle: string
    headerContentStyle: string
    navMenuStyle: string
    navLinkStyle: string
}

interface FullHeaderProps {
    props: HeaderComponentProps
}

export default function Header({ type, page }: HeaderProps) {
    const headerContentStyle = `relative flex justify-between items-center w-full ${headerContentWidthStyle[type]} sm:items-end`
    const logoStyle = 'pt-6'

    const navMenuStyle = getNavMenuStyle(type)

    const [navOpen, setNav] = useState(false)

    const toggleNav = (event: MouseEvent) => {
        setNav((open) => !open)
    }

    const props: HeaderComponentProps = {
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
            <div id="pagetop" className="h-0 scroll-mt-[7.5rem]">
                {' '}
            </div>
            {!pageTypeCheck(type, ['main']) ? (
                <>
                    <SideNavBackground
                        navOpen={navOpen}
                        toggleNav={toggleNav}
                    />
                    <FullHeader props={props} />
                    <div id="pagetop" className="h-0 scroll-mt-[7.5rem]">
                        {' '}
                    </div>
                </>
            ) : null}
        </>
    )
}

function SideNavBackground({ navOpen, toggleNav }: SideNavBackgroundProps) {
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

function FullHeader({ props }: FullHeaderProps) {
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
                            className="select-none font-brand text-[2.25rem] leading-[1] text-white drop-shadow before:-mt-6 md:text-[3rem]"
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
