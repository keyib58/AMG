'use client';
import Image from "next/image";


const AboutHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
      {/* Left Column */}
      <div className="flex justify-center">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-white Montserrat">We’ve been the pioneers, <br />the visionaries, and the fearless explorers of the iGaming world. </h1>
          <p className="text-lg Montserrat text-white">
            We create gaming products without shying away from innovation, <br />turning the most daring and fun ideas into reality.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/detatjujs/image/upload/v1722846458/c4a9eac8a0632209f97eab501eddc994_q22scn.png"
          alt="About Banner"
          width={1200}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AboutHero;
