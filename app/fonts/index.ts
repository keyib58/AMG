import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";


export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const ProximaNova = localFont({  
  src: "./ProximaNova.woff2",
  variable: "--font-proxima",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


// Arcon Font (local font)
export const Arcon = localFont({
  src: "./Arcon-Regular.otf", // Path to your Arcon font file
  variable: "--font-arcon",
});