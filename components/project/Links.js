import Link from "next/link";
import Section from "./Section";

// NOTE: This component manages its own typography and list styles to be more prominent than other sections

export default function Links({ links }) {
  return (
    <Section title="Project Links" className="links">
      <ul
        className={`flex flex-col list-none gap-2 text-[1.9rem] font-semibold tracking-tight leading-[1.6] md:text-[2rem]`}
      >
        {links.map(({ _key, text, url }) => {
          return (
            <li key={_key} className="flex items-center gap-10">
              <TextLinkWithIcon text={text} url={url} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

// In lieu of not modifying the CMS and NextJS to accomodate an emoji icon inserted at the beginning of each link in the CMS, we'll manually extract the icon here, add a class for styling, and update the link text.
function TextLinkWithIcon({ text, url }) {
  if (!text || text.length === 0) {
    return text;
  }
  const emojiRegex = /\p{Emoji}/u;
  const words = text.split(" ");
  const icon = emojiRegex.test(words[0]) ? words[0] : null;
  const linkText = icon ? words.slice(1).join(" ") : text;

  return (
    <>
      {icon && (
        <div className="text-[2.7rem]" aria-hidden>
          {icon}
        </div>
      )}
      <Link href={url} legacyBehavior>
        <a target="_blank" className="no-underline text-link">
          {linkText}
        </a>
      </Link>
    </>
  );
}
