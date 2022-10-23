import Card from "/components/main/Card";

const Items = ({ data: { type, itemPath, value: items }, as }) => {
  const Component = as || "div";
  return (
    // ITEMS: left-aligned children, full width until large screen
    <Component className="flex justify-center w-full p-5">
      <ul className="w-full max-w-screen-lg grid grid-cols-1 gap-5 md:gap-6 gap-x-7 md:grid-cols-2 md:min-w-[620px] justify-center bord-blue">
        {items.map((item) => {
          return <Card as="li" key={item._id} path={itemPath} data={item} />;
        })}
      </ul>
    </Component>
  );
};

export default Items;
