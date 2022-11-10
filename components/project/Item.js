export default function Item({ data }) {
  const { name, description, coverImage } = data;
  return (
    <div className="bg-white p-5">
      {/* <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl font-bold text-center">{data.title}</h1>
          <p className="text-xl text-center">{data.description}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-2xl font-bold text-center">{data.subtitle}</h2>
          <p className="text-xl text-center">{data.description}</p>
        </div>
      </div> */}
      <span>{name}</span>
      <span>{description}</span>
      <span>{console.log(coverImage)}</span>
    </div>
  );
}
