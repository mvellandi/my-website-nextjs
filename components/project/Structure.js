export default function Structure({ structure }) {
  return (
    <div className="flex flex-col mt-10 tracking-tight body gap-y-6 lg:gap-y-20 lg:mt-16 xl:gap-y-6">
      {structure.map(({ aspect, values }) => (
        <div key={aspect} className="grid grid-cols-[90px_1fr]">
          <h4>
            <span className="font-semibold">{aspect}</span>:
          </h4>
          <ul className="flex flex-wrap">
            {values.map((name, idx) => (
              <li key={name} className="">
                {name}
                {idx < values.length - 1 && <span>,&nbsp;</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
