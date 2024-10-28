'use client';

import React from 'react';

const services = [
  {
    title: "Countless Games Resource",
    description:
      "Our long-standing and strong partnerships with industry-leading collaborators allow us to offer an extensive and diverse array of game resources. We are dedicated to supporting your success in the competitive gaming market.",
  },
  {
    title: "Technical Support",
    description:
      "We provide a variety of exclusive technologies aimed at elevating our clients&rsquo; online gaming experience. Our solutions are crafted to optimize processes, enhance customer satisfaction, and boost revenue.",
  },
  {
    title: "Managed Service",
    description:
      "We offer a wide array of fully-managed services designed to help you achieve your business. Supported by a team of experienced professionals, we deliver outstanding assistance across various domains and technical support.",
  },
  {
    title: "Player Engagement",
    description:
      "We keep improving and diversifying our games to enhance player satisfaction and loyalty, and boost your business by engaging with players.",
  },
];

const ServicesPageContainer = () => {
  return (
    <section className="px-4 py-12 lg:px-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#693365] uppercase title-font mb-6">
          Our Services
        </h2>
        <p className="text-lg mb-12">
          We attract gaming companies worldwide through our transparent and compliant approach, coupled with outstanding game products. Our deep connections and friendly partnerships enable us to transform the gaming industry together, infusing it with fresh ideas and showcasing our impact to the world. Let&rsquo;s make a difference together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14">
          {services.map((service, index) => (
            <div key={index} className=" p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-bold mb-4 text-[#dab765]">{service.title}</h3>
              <p className="text-base text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPageContainer;
