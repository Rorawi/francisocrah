import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <img 
        src="/images/paintsplash.jpg" 
        alt="" 
        className="absolute right-0 opacity-20 left-0 w-full blur-md z-0" 
      />

      <div className="md:py-[75px] container mx-auto lg:px-4 text-center max-w-[930px] relative z-10">
        <div className="">
          <h1 className=" textShadow text-6xl text-center pt-25 font-bold text-[#111827] lg:text-[135px] mb-1 font-bagel">
            Hello, I'm Francis Ocrah
          </h1>
          <h1 className="text-xl text-center pt-5 lg:pt-10 font-semibold text-black lg:text-[25px] mb-12">
            Creative Media Specialist | Graphic Designer | Content Creator
          </h1>
          
          <p className="text-white text-center text-[19px] hidden">
            I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
          </p>
        </div>
      </div>
    </div>
  );
}