import React from 'react';
import SocialMedia from './socialMedia';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';  // Import Link from next/link

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx("text-white py-10 max-w-[1320px] m-auto opacity-50", className)}>
      <div className="flex mx-4 flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 items-center lg:items-start w-full lg:w-auto">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <Image
              src="/logo.png"
              alt="King Midas Logo"
              width={1000} // Remove hardcoded width
              height={400} // Maintain height
              className="logo-image object-contain w-full max-w-[150px] lg:max-w-[100px]" // Responsive max width
            />
          </div>
          {/* Social Media */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <SocialMedia />
          </div>
          {/* Copyright Desktop */}
          <div className="border-t content-font border-gray-200 pt-4 text-center lg:text-left w-full hidden lg:block">
            <p>© {new Date().getFullYear()} AMG Games. All rights reserved.</p>
            {/* Terms and Conditions & Privacy Policy Links */}
            <div className="mt-2 ">
              <Link href="/terms-and-conditions" className="text-white hover:underline mr-2">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
        {/* Middle Column */}
        <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left content-font">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <a href="mailto:hello@amgaming.ca" className="block text-xl">hello@amgaming.ca</a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          {/* Client Logos */}
          <div className="flex flex-col space-y-2 items-center lg:items-start">
            <div className="flex justify-center lg:justify-start space-x-12">
              <Image width={146} height={77} src="/footerLogo1.png" alt="Client 1" className="object-contain" />
              <Image width={144} height={151} src="/footerLogo2.png" alt="Client 2" className="object-contain" />
            </div>
            <div className="flex justify-center lg:justify-start">
              <Image width={315} height={40} src="/footerLogo3.png" alt="Horizontal Client" className="object-contain" />
            </div>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center w-full lg:hidden">
          <p>© {new Date().getFullYear()} AMG Games. All rights reserved.</p>
          {/* Terms and Conditions & Privacy Policy Links */}
          <div className="mt-2">
            <Link href="/terms-and-conditions" className="text-white hover:underline mr-4">Terms and Conditions</Link>
            <Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
