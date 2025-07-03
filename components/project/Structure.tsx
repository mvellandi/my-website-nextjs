import Section from './Section'

interface StructureItem {
    aspect: string
    values: string[]
}

interface StructureProps {
    structure: StructureItem[]
}

export default function Structure({ structure }: StructureProps) {
    return (
        <Section title="Design / Tech" className="structure">
            <div className="mt-10 flex flex-col gap-y-4 tracking-tight lg:mt-12 xl:gap-y-6">
                {structure.map(({ aspect, values }) => (
                    <div key={aspect} className="grid grid-cols-[80px_1fr]">
                        <h4>
                            <span className="font-bold">{aspect}</span>:
                        </h4>
                        <ul className="flex list-none flex-row">
                            {values.map((name, idx) => (
                                <li key={name}>
                                    {name}
                                    {idx < values.length - 1 && (
                                        <span>,&nbsp;</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}
