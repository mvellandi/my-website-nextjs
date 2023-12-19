import Section from "./Section";

export default function Structure({ structure }) {
  return (
    <Section title="Design / Tech" className="structure">
      <div className="flex flex-col mt-10 tracking-tight gap-y-6 lg:gap-y-20 lg:mt-12 xl:gap-y-6">
        {structure.map(({ aspect, values }) => (
          <div key={aspect} className="grid grid-cols-[80px_1fr]">
            <h4>
              <span className="font-semibold">{aspect}</span>:
            </h4>
            <ul className="flex flex-row list-none">
              {values.map((name, idx) => (
                <li key={name}>
                  {name}
                  {idx < values.length - 1 && <span>,&nbsp;</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
