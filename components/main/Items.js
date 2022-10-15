import Card from "/components/main/Card";

const Items = ({ items, as }) => {
  const Component = as || "div";
  return (
    // ITEMS: left-aligned children, full width until large screen
    <Component className="flex justify-center w-full bord-blue p-5">
      <ul className="max-w-screen-lg grid grid-cols-1 gap-5 md:gap-6 gap-x-7 md:grid-cols-2 bord-blue">
        {items.map((item, idx) => {
          return <Card as="li" key={idx} data={item} />;
        })}
      </ul>
    </Component>
  );
};

export default Items;
