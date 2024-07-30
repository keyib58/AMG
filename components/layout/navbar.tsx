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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "News", href: "/news" },
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
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="15" fill="#151515" />
              <path d="M13 14H37.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M13 24.5H37.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M13 35H25" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/" className="lg:mx-0  mx-auto font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Kingmidas logo"
              className="max-w-[200px] lg:max-w-[280px]"
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
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-[#0D0D0D] w-full absolute top-16 z-20">
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
            {session ? (
              <>
                <UserDropdown session={session} />
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black mt-2"
                  onClick={() => {
                    signOut();
                    toggleMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black mt-2"
                onClick={() => {
                  setShowSignInModal(true);
                  toggleMenu();
                }}
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
