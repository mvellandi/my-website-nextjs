import Link from "next/link";
import Section from "./Section";

// NOTE: This component manages its own typography and list styles to be more prominent than other sections

export default function Links({ links }) {
  return (
    <Section title="Project Links" className="links">
      <ul
        className={`flex flex-col list-none gap-4 pl-0 pt-4 text-[1.9rem] tracking-tight leading-[1.6] md:text-[2rem] md:gap-8`}
      >
        {links.map(({ _key, text, url }) => (
          <li key={_key} className="font-semibold">
            <Link href={url} legacyBehavior>
              <a target="_blank" className="no-underline text-link">
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
