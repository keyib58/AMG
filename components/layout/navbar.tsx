'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment, useSearchParams } from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";
// import { useSignInModal } from "./sign-in-modal"; // Commenting out session-related import
// import { Session } from "next-auth"; // Commenting out session-related import
import HamburgerIcon from "../icon/hamburger";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

// interface NavBarProps {
//   session: Session | null; // Commenting out session-related prop
// }

export default function NavBar() {
  // const { SignInModal, setShowSignInModal } = useSignInModal(); // Commenting out session-related code
  const scrolled = useScroll(50);
  const segment = useSelectedLayoutSegment();
  const searchParams = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkWithParams = (href: string) => {
    if (href === "/games") {
      const params = searchParams.toString();
      return params ? `${href}?${params}` : href;
    }
    return href;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* <SignInModal /> */} {/* Commenting out session-related component */}
      <div
        className={`fixed bg-[#000000] top-0 w-full flex justify-center ${scrolled ? "bg-[#000000]" : "bg-[#000000]"} z-30 transition-all`}
      >
        <div className="mx-5 h-20 flex max-w-[1320px] items-center justify-between w-full relative">
          <button
            className="text-white md:hidden absolute left-0"
            onClick={toggleMenu}
          >
            <HamburgerIcon />
          </button>
          <Link href="/" className="lg:mx-0 mx-auto md:mx-0 font-display text-2xl text-white">
            <Image
              src="/logo.png"
              alt="AMG Logo"
              className="max-w-[6rem] lg:max-w-[100px] p-2 lg:p-2 "
              width={300}
              height={100}
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-6 text-white font-bold items-center uppercase menu-btn-font">
            {navLinks.map((link) => {
              const isActive =
                segment === null && link.href === "/"
                  ? true
                  : segment === link.href.replace("/", "");
              return (
                <Link
                  href={getLinkWithParams(link.href)}
                  key={link.name}
                  className={`${isActive ? "text-[#693365]" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-50" onClick={toggleMenu}></div>
        )}

        {/* Mobile and Tablet Menu */}
        <div
          className={`fixed top-0 left-0 z-30 h-full w-3/4 bg-[#000000] transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
          <div className="flex flex-col h-full p-6 bg-white">
            <Link href="/" className="mb-6 " onClick={toggleMenu}>
              <Image
                src="/logo.png"
                alt="AMG Logo"
                className="w-24"
                width={160}
                height={60}
                priority
              />
            </Link>
            <nav className="flex flex-col space-y-4 text-white font-bold uppercase menu-btn-font">
              {navLinks.map((link) => {
                const isActive =
                  segment === null && link.href === "/"
                    ? true
                    : segment === link.href.replace("/", "");
                return (
                  <Link
                    href={getLinkWithParams(link.href)}
                    key={link.name}
                    className={`py-2 ${isActive ? "text-[#FFD868]" : "text-white"}`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
