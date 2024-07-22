// Footer.jsx
import React from 'react';
import SocialMedia from './socialMedia';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className=" text-white py-10 max-w-[1320px] m-auto">
      <div className="flex justify-between items-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/footerlogo.png"
              alt="King Midas Logo"
              width={252}
              height={33}
              priority
              className="logo-image object-contain"
            />
          </div>
          {/* Social Media */}
          <div className="flex justify-center md:justify-start">
            <SocialMedia />
          </div>
          {/* Footer Text */}
          <div className="border-t border-gray-200 pt-4 text-center md:text-left">
            <p>© 2024 KingMidas. All rights reserved.</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="midColumnWrapper">
          <div className='midColumnContainer'>
            <div className="text-left space-y-6">
              <h2 className="text-xl font-bold OpenSans">Contact Us</h2>
              <a href="mailto:hello@kingmidasgames.co" className="block OpenSans text-xl">hello@kingmidasgames.co</a>
              <a href="mailto:sales@kingmidasgames.co" className="block OpenSans text-xl">sales@kingmidasgames.co</a>
              <p className="block OpenSans text-xl">+65 8987 8903</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-6 columnWrapper">
          {/* Client Logos */}
          <div className='columnContainer'>
            <div className="flex justify-center md:justify-start space-x-12">
              <Image width={146} height={77} src="/footerLogo1.png" alt="Client 1" className="object-contain" />
              <Image width={144} height={151} src="/footerLogo2.png" alt="Client 2" className="object-contain" />
            </div>
            <div className="flex justify-center md:justify-start">
              <Image width={315} height={40} src="/footerLogo3.png" alt="Horizontal Client" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
