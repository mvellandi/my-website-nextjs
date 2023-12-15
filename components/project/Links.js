import Link from "next/link";

// NOTE: This component manages its own typography and list styles to be more prominent than other sections

export default function Links({ links }) {
  return (
    <ul
      className={`flex flex-col gap-y-4 pt-4 text-[1.9rem] tracking-tight leading-[1.6] md:text-[2rem] md:gap-y-6 lg:text-[2.2rem] lg:gap-y-8 xl:gap-y-6`}
    >
      {links.map(({ _key, text, url }) => (
        <li key={_key} className="text-[#2563eb] font-semibold">
          <Link href={url} legacyBehavior>
            <a target="_blank">{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
