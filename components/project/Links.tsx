import Link from 'next/link'
import Section from './Section'

interface LinkItem {
    _key: string
    text: string
    url: string
}

interface LinksProps {
    links: LinkItem[]
}

interface TextLinkWithIconProps {
    text: string
    url: string
}

// NOTE: This component manages its own typography and list styles to be more prominent than other sections

export default function Links({ links }: LinksProps) {
    return (
        <Section title="Project Links" className="links">
            <ul
                className={`flex list-none flex-col gap-2 text-[1.1875rem] font-semibold leading-[1.6] tracking-tight md:text-[1.25rem]`}
            >
                {links.map(({ _key, text, url }) => {
                    return (
                        <li key={_key} className="flex items-center gap-10">
                            <TextLinkWithIcon text={text} url={url} />
                        </li>
                    )
                })}
            </ul>
        </Section>
    )
}

// In lieu of not modifying the CMS and NextJS to accommodate an emoji icon inserted at the beginning of each link in the CMS, we'll manually extract the icon here, add a class for styling, and update the link text.
function TextLinkWithIcon({ text, url }: TextLinkWithIconProps) {
    if (!text || text.length === 0) {
        return <>{text}</>
    }
    const emojiRegex = /\p{Emoji}/u
    const words = text.split(' ')
    const icon = emojiRegex.test(words[0]) ? words[0] : null
    const linkText = icon ? words.slice(1).join(' ') : text

    return (
        <>
            {icon && (
                <div className="text-[1.6875rem]" aria-hidden>
                    {icon}
                </div>
            )}
            <Link href={url} legacyBehavior>
                <a target="_blank" className="text-link no-underline">
                    {linkText}
                </a>
            </Link>
        </>
    )
}
