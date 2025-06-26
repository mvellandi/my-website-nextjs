import { pageTypeCheck, getFooterContentStyle } from './constants'
import HTMLComment from 'react-html-comment'
import Social from './Social'

interface FooterProps {
    type: string
}

export default function Footer({ type }: FooterProps) {
    const footerContentStyle = getFooterContentStyle(type)

    return (
        <>
            <HTMLComment text="SOCIAL LINKS" />
            <Social type="footer" pageType={type} />
            <HTMLComment text="FOOTER" />
            <footer className="flex h-full w-full items-start justify-center bg-red pb-48 pt-16 md:justify-start lg:justify-center">
                <div className={footerContentStyle}>
                    <div className="flex flex-col gap-0 text-sm lg:flex-row lg:justify-between xl:text-base">
                        <span className="inline-block pb-8">
                            &copy; {new Date().getFullYear()} - Mario Vellandi
                        </span>
                        <p
                            className={`xl:text-right ${
                                pageTypeCheck(type, ['article', 'page']) &&
                                'max-w-[85ch]'
                            }`}
                        >
                            This website was{' '}
                            <a
                                className="text-link-inverse"
                                href="https://www.figma.com/file/fXYOUHrUhtQGYkS76dvOvC/_Vellandi.net?type=design&node-id=2665%3A41983&t=tihZwOVYhJiC2vR7-1"
                            >
                                designed
                            </a>{' '}
                            with Figma and built using Next.js with Tailwind{' '}
                            <a
                                className="text-link-inverse"
                                href="https://github.com/mvellandi/my-website-nextjs"
                            >
                                code
                            </a>{' '}
                            and Sanity CMS{' '}
                            <a
                                className="text-link-inverse"
                                href="https://github.com/mvellandi/my-website-sanity-cms"
                            >
                                code
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
