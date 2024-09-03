'use client';
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 overflow-hidden gap-6 items-center lg:mt-6 ">
      {/* Left Column (Image) */}
      <div className="flex justify-center order-1 lg:order-2 transform lg:scale-125 lg:pt-10 lg:pr-4">
        <Image
          src="https://res.cloudinary.com/detatjujs/image/upload/v1723015905/aboutheader.png"
          alt="About Banner"
          width={1400}
          height={600}
          className="object-contain"
        />
      </div>


      {/* Right Column (Text) */}
      <div className="flex justify-center order-2 lg:order-1 px-4">
        <div className="space-y-4">
          <h2 className="text-[20px] lg:text-4xl font-bold text-white Montserrat">
            We’ve been the pioneers, the visionaries, and the fearless explorers of the iGaming world.
          </h2>
          <p className="text-lg Montserrat text-white">
            We create gaming products without shying away from innovation, <br />
            turning the most daring and fun ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
