import { PortableText } from '@portabletext/react'

// Types for PortableText content
type PortableTextBlock = any // Using any for now as PortableText has complex nested types

interface SectionData {
    heading: string
    body: PortableTextBlock[]
}

interface ProcessSectionProps {
    section: SectionData
    iteration: string
}

function idAnchor(string: string): string {
    return string
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
}

export default function ProcessSection({
    section,
    iteration,
}: ProcessSectionProps) {
    return (
        <section className="section standard">
            {/* HEADING WITH QUICK NAVIGATION */}
            <div className={`process_header flex items-start justify-between`}>
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
