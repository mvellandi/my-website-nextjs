import Card from "/components/main/Card";

export default function Items({ data: { type, route, value: items }, as }) {
  const Component = as || "div";
  return (
    // ITEMS: left-aligned children, full width until large screen
    <Component className="flex justify-center w-full site-padding-x pt-20 pb-36 min-h-[35rem] md:py-36 lgtall:pt-48 lgtall:pb-56 2k:pt-56 2k:pb-64 bg-white">
      <ul className="w-full max-w-screen-xl justify-center grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-48 md:min-w-[620px] xl:grid-cols-3 2xl:gap-36 2k:gap-64">
        {items.map((item) => {
          return <Card as="li" key={item._id} route={route} data={item} />;
        })}
      </ul>
    </Component>
  );
}
