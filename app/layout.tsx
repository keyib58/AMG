import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import SessionWrapper from "@/components/SessionWrapper";
import ReduxProvider from "@/components/ReduxProvider";
import SessionLogger from "@/components/shared/SessionLogger";

// Metadata API for setting metadata in the app directory
export const metadata = {
  title: "Kingmidas Games - Claim Your Goodie Bag Today!",
  description: "Join us at Kingmidas Games to explore amazing opportunities and claim your goodie bag!",
  openGraph: {
    type: 'website',
    url: 'https://km2024-jul.vercel.app/',
    title: "Kingmidas Games - Claim Your Goodie Bag Today!",
    description: "Join us at Kingmidas Games to explore amazing opportunities and claim your goodie bag!",
    images: [
      {
        url: 'https://km2024-jul.vercel.app/socialShare.jpg',  // Use the static image URL here
        width: 1600,
        height: 900,
        alt: 'Kingmidas Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kingmidas Games - Claim Your Goodie Bag Today!",
    description: "Join us at Kingmidas Games to explore amazing opportunities and claim your goodie bag!",
    images: ['https://km2024-jul.vercel.app/socialShare.jpg'],  // Use the static image URL here
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, "bg-[#0d0d0d]")}>
        <ReduxProvider>
          <SessionWrapper>
            <SessionLogger />
            <Suspense fallback="...">
              <Nav />
              <main className="flex w-full flex-col items-center mt-16">
                {children}
              </main>
              <Footer className="mt-[100px] lg:mt-[200px]" />
            </Suspense>
            <VercelAnalytics />
          </SessionWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
