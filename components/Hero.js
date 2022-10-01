import Image from "next/future/image";
import portrait from "/public/mario-portrait-fall-200.jpg";

const photoStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "9999px",
  border: "1px solid #980F0F",
  filter: "drop-Shadow(0 5px 12px rgba(62, 17, 17, 0.4)",
};

const Hero = () => {
  return (
    <header className="flex justify-center px-5 py-6 lg:py-8 bg-red w-full text-white border-b-8 border-red-shade">
      <div className="flex gap-5 lg:gap-12">
        <div className="flex flex-col justify-center gap-6 md:w-[380px] lg:gap-12">
          <h1 className="text-2xl tracking-tight lg:text-3xl lg:leading-[1.22] font-light drop-shadow">
            I research and produce digital media
          </h1>
          <h2 className="text-sm md:text-md lg:text-xl text-white">
            -> <span className="about-mario">about Mario Vellandi</span>
          </h2>
        </div>
        <div className="min-w-[150px] min-h-[150px] md:w-[200px] md:h-[200px]">
          <Image src={portrait} style={photoStyle} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
