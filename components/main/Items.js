import Card from "/components/main/Card";

export default function Items({ data: { type, route, value: items }, as }) {
  const Component = as || "div";
  return (
    // ITEMS: left-aligned children, full width until large screen
    <Component className="flex justify-center w-full site-padding-x pt-5 pb-9 md:py-9 lgtall:pt-12 lgtall:pb-14 2k:pt-14 2k:pb-16 bg-white">
      <ul className="w-full max-w-screen-xl justify-center grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:min-w-[620px] xl:grid-cols-3 2xl:gap-9 2k:gap-16">
        {items.map((item) => {
          return <Card as="li" key={item._id} route={route} data={item} />;
        })}
      </ul>
    </Component>
  );
}
