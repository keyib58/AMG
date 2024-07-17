"use client";

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
  // { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  // { name: "News", href: "/news" },
  // { name: "Contact", href: "/contact" },
];

interface NavBarProps {
  session: Session | null;
}

export default function NavBar({ session }: NavBarProps) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const segment = useSelectedLayoutSegment();
  const searchParams = useSearchParams(); // Hook to get current search params

  // Function to add query params to the link
  const getLinkWithParams = (href: string) => {
    const params = searchParams.toString();
    return params ? `${href}?${params}` : href;
  };

  return (
    <>
      <SignInModal />
      <div
        className={`fixed bg-[#0D0D0D] top-0 w-full flex justify-center ${scrolled ? "bg-[#0D0D0D]" : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-[1320px] items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Kingmidas logo"
              width={300}
              height={100}
              priority // Added priority for LCP
              className="logo-image mr-2 rounded-sm"
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
                  href={getLinkWithParams(link.href)} // Use function to preserve query params
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
      </div>
    </>
  );
}
