import Card from "/components/main/Card";

export default function Items({ data: { type, route, value: items }, as }) {
  const Component = as || "div";
  return (
    // ITEMS: left-aligned children, full width until large screen
    <Component className="bg-white flex justify-center items-start w-full site-padding-x pt-20 pb-36 min-h-[200px] sm:min-h-[300px] md:py-36 md:min-h-[380px] lgtall:pt-48 lgtall:pb-56 lgtall:min-h-[450px] xl:min-h-[250px] 2xl:min-h-[350px] 3xl:min-h-[400px] 2k:pt-56 2k:pb-64 2k3:min-h-[480px]">
      <ul className="w-full max-w-screen-xl grid justify-center grid-cols-1 gap-24 md:grid-cols-2 md:gap-48 md:min-w-[620px] xl:grid-cols-3 2xl:gap-36 2k:gap-64">
        {items.map((item) => {
          return <Card as="li" key={item._id} route={route} data={item} />;
        })}
      </ul>
    </Component>
  );
}
