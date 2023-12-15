export default function Header({ name, sector, coverImage }) {
  return (
    <header className="flex justify-between w-full gap-24 sm:justify-start sm:gap-36">
      <div className="flex flex-col gap-8 sm:order-2">
        <h1 className="text-3xl font-light leading-tight text-black -tracking-1 sm:text-3xl">
          {name}
        </h1>
        <p className="text-sm font-bold text-gray-700 uppercase tracking-3">
          {sector}
        </p>
      </div>
      <div class="pt-6 min-w-[100px] max-w-[120px] lg:pt-8">
        <img
          src={coverImage}
          alt="altText"
          width={120}
          height={120}
          className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] order-1"
        />
      </div>
    </header>
  );
}
