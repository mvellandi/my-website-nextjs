import Card from "/components/main/Card";

export default function Items({ data: { type, route, value: items }, as }) {
  const Component = as || "div";
  return (
    // ITEMS: left-aligned children, full width until large screen
    <Component className="flex justify-center w-full p-5 bg-white">
      <ul className="w-full max-w-screen-lg grid grid-cols-1 gap-5 md:gap-6 gap-x-7 md:grid-cols-2 md:min-w-[620px] justify-center">
        {items.map((item) => {
          return <Card as="li" key={item._id} route={route} data={item} />;
        })}
      </ul>
    </Component>
  );
}
