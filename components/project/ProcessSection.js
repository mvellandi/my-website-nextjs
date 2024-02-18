import { PortableText } from '@portabletext/react'

function idAnchor(string) {
    return string
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
}

export default function ProcessSection({ section, iteration }) {
    return (
        <section className="section standard">
            {/* HEADING WITH QUICK NAVIGATION */}
            <div className={`flex items-start justify-between`}>
                <h2
                    id={`${idAnchor(section.heading)}-${iteration}`}
                    className="heading scroll_margin"
                >
                    {section.heading}
                </h2>
                <div
                    className="mt-auto flex flex-col justify-end"
                    aria-hidden="true"
                >
                    <div className="min-w-[120px] pb-6 pl-20 text-sm text-gray-400">
                        <a href="#" className="text-link">
                            top
                        </a>{' '}
                        |{' '}
                        <a href={`#outline-${iteration}`} className="text-link">
                            outline
                        </a>
                    </div>
                </div>
            </div>
            {/* BODY */}
            <PortableText value={section.body} />
        </section>
    )
}
