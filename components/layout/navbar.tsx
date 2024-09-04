'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment, useSearchParams } from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import HamburgerIcon from "../icon/hamburger";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "News", href: "/news" },
  { name: "Contact us", href: "/contact" },
];

interface NavBarProps {
  session: Session | null;
}

export default function NavBar({ session }: NavBarProps) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
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
      <SignInModal />
      <div
        className={`fixed bg-[#0D0D0D] top-0 w-full flex justify-center ${scrolled ? "bg-[#0D0D0D]" : "bg-[#0D0D0D]"} z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-[1320px] items-center justify-between w-full relative">
          <button
            className="text-white md:hidden absolute left-0"
            onClick={toggleMenu}
          >
            <HamburgerIcon />
          </button>
          <Link href="/" className="lg:mx-0 mx-auto md:mx-0 font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Kingmidas logo"
              className="max-w-[12rem] lg:max-w-[280px]"
              width={300}
              height={100}
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-6 text-white font-bold items-center uppercase Montserrat">
            {navLinks.map((link) => {
              const isActive =
                segment === null && link.href === "/"
                  ? true
                  : segment === link.href.replace("/", "");
              return (
                <Link
                  href={getLinkWithParams(link.href)}
                  key={link.name}
                  className={`${isActive ? "text-[#FFD868]" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
            {session ? (
              <>
                <UserDropdown session={session} />
                <button
                  className="rounded-full text-black p-1.5 px-4 text-sm hover:text-white transition-all"
                  style={{ background: "linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)" }}
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="rounded-full text-black p-1.5 px-4 text-sm hover:text-white transition-all"
                style={{ background: "linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)" }}
                onClick={() => setShowSignInModal(true)}
              >
                CLIENT AREA
              </button>
            )}
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-50" onClick={toggleMenu}></div>
        )}

        {/* Mobile and Tablet Menu */}
        <div
          className={`fixed top-0 left-0 z-30 h-full w-3/4 bg-[#151515] transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
          <div className="flex flex-col h-full p-6">
            <Link href="/" className="mb-6" onClick={toggleMenu}>
              <Image
                src="/logo.png"
                alt="Kingmidas logo"
                className="w-40"
                width={160}
                height={60}
                priority
              />
            </Link>
            <nav className="flex flex-col space-y-4 text-white font-bold uppercase Montserrat">
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

            {session ? (
              <>
                <div className="mt-4 space-y-4 flex flex-col">
                  <UserDropdown session={session} />
                  <button
                    className="w-full max-w-[175px] Montserrat font-bold rounded-full p-1.5 px-4 text-sm text-black transition-all "
                    style={{ background: "linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)" }}
                    onClick={() => {
                      signOut();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-4">
                <button
                  className="w-full max-w-[175px] Montserrat font-bold rounded-full p-1.5 px-4 text-sm text-black transition-all "
                  style={{ background: "linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)" }}
                  onClick={() => {
                    setShowSignInModal(true);
                    toggleMenu();
                  }}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
